<?php

namespace App\Http\Controllers;

use App\Tablet;
use App\Transaction;
use App\Truck;
use Illuminate\Http\Request;
use Auth;
use Toastr;

class TabletController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $tablets = Tablet::with('transactions', 'truck')->get();
        $trucks = Truck::all();
        
        return view('tablets.index', compact('user', 'tablets', 'trucks'));
    }
    
    public function manage($id)
    {
        $tablet = Tablet::with('transactions', 'truck')->where('id', $id)->first();
        $trucks = Truck::all();
        
        return view('tablets.manage', compact('tablet', 'trucks'));
    }
    
    public function create()
    {
        $user = Auth::user();
        
        return view('tablets.add', compact('user'));
    }
    
    public function store(Request $request)
    {
        $tablet = new Tablet();
        
        $tablet->imei = $request->imei;
        $tablet->name = $request->name;
        $tablet->mobile_number = $request->mobile_number;
        
        $tablet->save();
        
        Toastr::success('Canned Question Created!', $title = null, $options = []);
        
        return redirect('/tablets/');
    }
    
    public function edit($id)
    {
        $tablet = Tablet::find($id);
        
        $user = Auth::user();
        
        return view('tablets.add', compact('user', 'tablet'));
    }
    
    public function update(Request $request, $id)
    {
        $old_record = Tablet::find($id);
        
        $tablet = Tablet::find($id);
    
        $tablet->location = $request->location;
        $tablet->status = $request->status;
        $tablet->truck_id = $request->truck_id;
        
        $tablet->save();
        
        $transaction = new Transaction();
        
        $transaction->user_id = Auth::id();
        $transaction->tablet_id = $tablet->id;
        $transaction->status = $request->status;
        $transaction->location = $request->location;
        $transaction->truck_id = $request->truck_id;
        $transaction->note = Auth::user()->name . ' moved tablet (' . $tablet->imei . ') from ' . $old_record->status . ' to ' . $tablet->status;
        
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
