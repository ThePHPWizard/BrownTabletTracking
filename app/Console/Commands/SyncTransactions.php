<?php

namespace App\Console\Commands;

use App\Transaction;
use Illuminate\Console\Command;

class SyncTransactions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:name';

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
    
            DB::connection('sqlsrv')->table('OmniTracs_TabletInventoryUpdate')->insert([
                'Tab_Phone' => $transaction->tablet->mobile_number,
                'Tab_Status' => $transaction->status,
                'Tab_Location' => $location,
                'Tab_UpdateBy' => $transaction->user->name,
                'Tab_UpdateWhen' => date('Y-m-d H:i:s', strtotime(Carbon::now()))
            ]);
            
            $transaction->status = 'Delivered';
            $transaction->save();
            
        }
    }
}
