<?php

namespace App\Console\Commands;

use App\Transaction;
use Illuminate\Console\Command;
use DB;
use Carbon\Carbon;
use Mail;

class SyncTransactions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sync:transactions';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $transactions = Transaction::where('sync_status', 'Created')->get();
        
        foreach ($transactions as $transaction){
            
            if ($transaction->status === 'On Truck'){
                $location = $transaction->truck->vehicle_id;
            } else {
                $location = $transaction->location;
            }
            
            if ($transaction->status !== 'On Truck' && $transaction->location === null){
                if ($transaction->email_sent === null){
                    Mail::send('emails.sync_failed', ['transaction' => $transaction], function ($message) {
                        $message->from(env('MAIL_USERNAME'), env('APP_NAME'));
                        $message->to('thahn@browntrucking.com');
                        $message->cc('steven.ash@sstech.us');
                        $message->subject(Carbon::now()->format('Y-m-d') . ' Tablet Sync Error');
                    });
                    $transaction->email_sent = 'Yes';
                    $transaction->save();
                }
            } else {
                DB::connection('sqlsrv')->table('OmniTracs_TabletInventoryUpdate')->insert([
                    'Tab_Phone' => $transaction->tablet->mobile_number,
                    'Tab_Status' => $transaction->status,
                    'Tab_Location' => $location,
                    'Tab_UpdateBy' => $transaction->user->name,
                    'Tab_UpdateWhen' => date('Y-m-d H:i:s', strtotime(Carbon::now())) . '.000'
                ]);
    
                $test = DB::connection('sqlsrv')
                    ->table('OmniTracs_TabletInventoryUpdate')
                    ->get();
    
                print_r(response()->json($test));
    
                $transaction->sync_status = 'Delivered';
                $transaction->save();
            }
            
            
        }
    }
}
