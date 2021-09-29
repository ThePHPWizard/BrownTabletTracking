<?php

namespace App\Http\Controllers;

use App\Office;
use App\Tablet;
use App\Transaction;
use App\Truck;
use Illuminate\Http\Request;
use Auth;
use Toastr;
use DB;

class TabletController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $tablets = Tablet::with('transactions', 'truck', 'office')->get();
        $trucks = Truck::all();
        
        return view('tablets.index', compact('user', 'tablets', 'trucks'));
    }
    
    public function manage($id)
    {
        $tablet = Tablet::with('transactions', 'truck', 'transactions.user', 'transactions.truck')->where('id', $id)->first();
        $trucks = Truck::all();
        $offices = Office::all();
        $transactions = DB::connection('sqlsrv')
            ->table('OmniTracs_TabletInventory')
            ->where('Tab_IMEI', 'LIKE', '%' . $tablet->imei . '%')
            ->get();
        
        return view('tablets.manage', compact('tablet', 'trucks', 'offices', 'transactions'));
    }
    
    public function create()
    {
        $user = Auth::user();
        
        return view('tablets.add', compact('user'));
    }
    
    public function update(Request $request, $id)
    {
        $old_record = Tablet::find($id);
        
        $tablet = Tablet::find($id);
    
        $tablet->office_id = $request->office_id;
        $tablet->status = $request->status;
        $tablet->truck_id = $request->truck_id;
        
        $tablet->save();
        $office = Office::find($request->office_id);
        if (!empty($office)){
            $location = $office->city . ', ' . $office->state;
        } else {
            $location = null;
        }
        
        $transaction = new Transaction();
        
        $transaction->user_id = Auth::id();
        $transaction->tablet_id = $tablet->id;
        $transaction->status = $request->status;
        $transaction->location = $location;
        $transaction->truck_id = $request->truck_id;
        $transaction->note = Auth::user()->name . ' moved tablet (' . $tablet->imei . ') from ' . $old_record->status . ' to ' . $tablet->status;
        $transaction->sync_status = 'Created';
        
        $transaction->save();
        
        Toastr::success('Tablet Updated!', $title = null, $options = []);
        
        return back();
    }
    
    public function destroy($id)
    {
        Tablet::find($id)->delete();
        
        Toastr::success('Tablet removed!', $title = null, $options = []);
        
        return redirect('/tablets/');
    }
}
