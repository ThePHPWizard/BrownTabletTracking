@extends('layouts.auth')

@section('content')
    <div class="container">

        <div col-md-5>
            <div class="login-box card">
                <form method="POST" action="/register">
                    {{ csrf_field() }}
                    <div class="card-body">
                        <div class="text-center"><img src="./images/atlas-ecards-logo.png" width="250px"></div>
                        <h3 class="box-title m-b-20">Registration</h3>
                        <div class="form-group{{ $errors->has('company_name') ? ' has-error' : '' }} row">
                            <!--<label for="name" class="col-md-4 control-label">Name</label>-->
                            <div class="col-md-12">
                                <input id="company_name" type="text" placeholder="Company Name" class="form-control"
                                       name="company_name" value="{{ old('companyname') }}" required
                                       autofocus>
                                @if ($errors->has('company_name'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('company_name') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }} row">
                            <!--<label for="name" class="col-md-4 control-label">Name</label>-->
                            <div class="col-md-12">
                                <input id="name" type="text" placeholder="Name" class="form-control" name="name"
                                       value="{{ old('name') }}" required
                                >
                                @if ($errors->has('name'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }} row">
                            <!--<label for="email" class="col-md-4 control-label">E-Mail Address</label>-->
                            <div class="col-md-12">
                                <input id="email" type="email" placeholder="Email" class="form-control" name="email"
                                       value="{{ old('email') }}" required>

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }} row">
                            <!--<label for="password" class="col-md-4 control-label">Password</label>-->
                            <div class="col-md-12">
                                <input id="password" type="password" placeholder="Password" class="form-control"
                                       name="password" required>

                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group row">
                            <!--<label for="password-confirm" class="col-md-4 control-label">Confirm Password</label>-->
                            <div class="col-md-12">
                                <input id="password-confirm" type="password" placeholder="Confirm Password"
                                       class="form-control" name="password_confirmation" required>

                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-12">
                                <button type="submit" class="btn btn-primary btn-lg col-md-12">
                                    Register
                                </button>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-12">If you are already registered<a href='/login'>
                                    <button type="button" class="btn btn-link">
                                        Login Here
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
