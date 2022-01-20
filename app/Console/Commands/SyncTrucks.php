<?php
    
    namespace App\Console\Commands;
    
    use App\Truck;
    use Illuminate\Console\Command;
    use Log;
    use GuzzleHttp\Client;
    use GuzzleHttp\HandlerStack;
    use GuzzleHttp\Middleware;
    use GuzzleHttp\Exception\RequestException;
    
    class SyncTrucks extends Command
    {
        /**
         * The name and signature of the console command.
         *
         * @var string
         */
        protected $signature = 'sync:trucks';
        
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
    
            $client = new Client();
            $headers = [
                'Authorization' => base64_encode(env('OMNITRACS_COMPANY_ID') . '|' . env('OMNITRACS_USER_NAME') . ':' . env('OMNITRACS_PASSWORD')),
                'Content-Type' => 'application/json',
                'Accept-Type' => 'application/json'
            ];
    
            $res = $client->request('get', 'https://ws.xataxrs.com/VehicleWebService.svc/vehicles', [
                'headers' => $headers,
                'query' => [
                    'limit' => '9999'
                ]
            ]);
    
            $array = json_decode($res->getBody(), true);
            collect($array);
            $vehicles = collect(json_decode($res->getBody(), true));
            
            Log::debug('---- Starting Import ----');
            
           foreach ($vehicles as $vehicle_update){
               Log::debug('Starting Vehicle ' . $vehicle_update['VehicleName']);
    
               $vehicle_check = Truck::where('vehicle_id', $vehicle_update['VehicleName'])->first();
    
               if (!empty($vehicle_update['VehicleName'])) {
        
                   if (!empty($vehicle_check)) {
                       Log::debug('Update Vehicle');
                       $vehicle = Truck::find($vehicle_check->id);
                   } else {
                       Log::debug('New Vehicle');
                       $vehicle = new Truck();
                   }
                   
                   $vehicle->organization = $vehicle_update['CompanyName'];
                   $vehicle->license_plate = $vehicle_update['LicensePlate'];
                   $vehicle->manufacturer = $vehicle_update['Manufacture'];
                   $vehicle->model = $vehicle_update['Model'];
                   $vehicle->vehicle_axles = $vehicle_update['PowerAxles'];
                   $vehicle->owner_operator = $vehicle_update['OwnerOperator'];
                   $vehicle->status = $vehicle_update['Status'];
                   $vehicle->tgit = $vehicle_update['TGTNumber'];
                   $vehicle->vehicle_type = $vehicle_update['Type'];
                   $vehicle->vin = $vehicle_update['VIN'];
                   $vehicle->vehicle_id = $vehicle_update['VehicleName'];
                   $vehicle->year = $vehicle_update['Year'];
        
                   $vehicle->save();
        
                   Log::debug('Vehicle Saved');
        
               } else {
        
                   Log::debug('Test Vehicle Skipped - ' . $vehicle_update['VehicleName']);
               }
           }
           
            Log::debug('---- End of Import ----');
            
        }
        
    }
