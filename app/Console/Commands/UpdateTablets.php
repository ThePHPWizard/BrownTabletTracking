<?php

namespace App\Console\Commands;

use App\Tablet;
use Illuminate\Console\Command;
use DB;

class UpdateTablets extends Command
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
        function test(){
            $tablets = DB::connection('sqlsrv')->table('OmniTracs_TabletInventory')->get();
            
            foreach ($tablets as $tablet){
                $imei = preg_replace('/[^0-9]/', '', $tablet->Tab_IMEI);
                $mobile_number = preg_replace('/[^0-9]/', '', $tablet->Tab_Phone);
                $check = Tablet::where('phone_number', $mobile_number)->where('imei', $imei)->first();
                if (empty($check)){
                    $new_tablet = new Tablet();
                   
                    $new_tablet->imei = $imei;
                    $new_tablet->name = $imei;
                    $new_tablet->mobile_number = $mobile_number;
                    $new_tablet->truck_id = null;
                    $new_tablet->status = 'New';
                    $new_tablet->office_id = null;
                    $new_tablet->created_by = 'System';
                    
                    $new_tablet->save();
                    
                }
            }
        }
    }
}
