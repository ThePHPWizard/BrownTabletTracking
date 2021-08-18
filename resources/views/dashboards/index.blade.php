@extends('layouts.app')
@section('content')
    <!-- ============================================================== -->
    <!-- Dashboard content -->
    <!-- ============================================================== -->
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">

        <div class="row">
            <div class=" col-3">
                <div class="card card-body text-center" >
                    <p>Active Tablets</p>
                    <div class="card-text"><h1
                            style="font-size: 4em; font-weight: bold;">{{ $tablets }}</h1>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card card-body text-center">
                    <p>Active Trucks</p>
                    <div class="card-text"><h1
                            style="font-size: 4em; font-weight: bold;">{{ $trucks }}</h1>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card card-body text-center">
                    <p>Action Users</p>
                    <div class="card-text"><h1
                            style="font-size: 4em; font-weight: bold;">{{ $users }}</h1>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card card-body text-center">
                    <p>Decommissioned Tablets</p>
                    <div class="card-text"><h1
                            style="font-size: 4em; font-weight: bold;">{{ $disabled_tablets }}</h1>
                    </div>
                </div>
            </div>

        </div>
    <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
@endsection
@include('includes.datatables')
@push('scripts')
    <script>
        $('.table').DataTable();
    </script>
@endpush
