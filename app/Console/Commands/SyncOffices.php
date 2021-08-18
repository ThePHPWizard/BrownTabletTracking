<?php

namespace App\Console\Commands;

use App\Office;
use Illuminate\Console\Command;
use DB;

class SyncOffices extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sync:offices';

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
        $offices = DB::connection('sqlsrv')->table('OmniTracs_TabletLocations')->get();
        echo 'Found ' . count($offices) . ' offices!' . "\n";
    
        foreach ($offices as $office) {
            echo 'Processing ' . $office->Tab_City . ', ' . $office->Tab_City . "\n";
            $check = Office::where('city', $office->Tab_City)->where('state', $office->Tab_State)->first();
            
            if (empty($check)) {
                $new_office = new Office();
    
                $new_office->city = $office->Tab_City;
                $new_office->state = $office->Tab_State;
    
                $new_office->save();
            
            }
        }
        echo 'Complete ' . "\n";
    }
}
