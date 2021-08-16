<?php

namespace App\Http\Controllers;

use App\FormBuilder;
use App\Upload;
use Illuminate\Http\Request;
use Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function dashboard()
    {
        return view('dashboards.index');
    }
    
    public function career_exploration()
    {
        return view('career_exploration.index');
    }
    
    public function future_fit()
    {
        return view('career_exploration.futurefit');
    }
    
    public function resume_assistance()
    {
        $files = Upload::where('user_id', Auth::id())->get();
        return view('career_exploration.resume_assistance', compact('files'));
    }
    
    public function assistance_programs()
    {
        $programs = FormBuilder::get();
        return view('assistance_programs.index', compact('programs'));
    }
    
    public function form($id){
        $form = FormBuilder::find($id);
        
        return view('form_builders.customer_view', compact('form'));
    }
}
