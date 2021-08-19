<?php
    
    namespace App\Console\Commands;
    
    use App\Office;
    use App\Tablet;
    use Illuminate\Console\Command;
    use DB;
    use Log;
    
    class UpdateTablets extends Command
    {
        /**
         * The name and signature of the console command.
         *
         * @var string
         */
        protected $signature = 'update:tablets';
        
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
            $tablets = DB::connection('sqlsrv')->table('OmniTracs_TabletInventory')->get();
            echo 'Found ' . count($tablets) . ' tablets!' . "\n";
            
            foreach ($tablets as $tablet) {
                echo 'Processing ' . $tablet->Tab_Phone . "\n";
                $imei = preg_replace('/[^0-9]/', '', $tablet->Tab_IMEI);
                $mobile_number = preg_replace('/[^0-9]/', '', $tablet->Tab_Phone);
                $tablet_location = explode(' ', $tablet->Tab_Location);
                if ($tablet->Tab_Status === 'In-Inventory'){
                    $status = 'In Inventory';
                } else {
                    $status = $tablet->Tab_Status;
                }
                $location = Office::where('city', $tablet_location[0])->where('state', $tablet_location[1])->first();
                $check = Tablet::where('mobile_number', $mobile_number)->where('imei', $imei)->first();
                if (empty($check)) {
                    $new_tablet = new Tablet();
                    
                    $new_tablet->imei = $imei;
                    $new_tablet->mobile_number = $mobile_number;
                    $new_tablet->truck_id = null;
                    $new_tablet->status = $status;
                    $new_tablet->office_id = $location->id;
                    $new_tablet->created_by = 'System';
                    
                    $new_tablet->save();
                    
                }
            }
            echo 'Complete ' . "\n";
        }
    }
