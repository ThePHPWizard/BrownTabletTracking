@extends('layouts.app')

@section('content')
    <div class="container-fluid">
        <!-- ============================================================== -->
        <!-- Start Page Content -->
        <!-- ============================================================== -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4>Tablets</h4>
                        <div class="table-responsive">
                            <table id="example23"
                                   class="display nowrap table table-hover table-striped table-bordered"
                                   cellspacing="0" width="100%">
                                <thead>
                                <tr>
                                    <th>Mobile Number</th>
                                    <th>IMEI</th>
                                    <th>Status</th>
                                    <th>Current Assignment</th>
                                    <th>Options</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($tablets as $tablet)
                                    <tr>
                                        <td>{{ '('.substr($tablet->mobile_number, 0, 3).') '.substr($tablet->mobile_number, 3, 3).'-'.substr($tablet->mobile_number,6) }}</td>
                                        <td>{{ $tablet->imei }}</td>
                                        <td>{{ $tablet->status }}</td>
                                        @if(isset($tablet->truck))
                                            <td>Vehicle Number: {{ $tablet->truck->vehicle_id }}</td>
                                        @else
                                            @if(isset($tablet->office))
                                                <td>{{ $tablet->office->city }}, {{ $tablet->office->state }}</td>
                                            @else
                                                <td></td>
                                            @endif
                                        @endif
                                        <td>
                                            <a href="/tablets/{{ $tablet->id }}/manage"
                                               class="btn btn-outline-info btn-sm"><i class="fa fa-cogs"></i> Manage</a>
                                        </td>
                                    </tr>
                                @endforeach

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ============================================================== -->
        <!-- End PAge Content -->
        <!-- ============================================================== -->
    </div>
@endsection
@include('includes.datatables')
@include('includes.select2')
@push('scripts')
    <script>
        $(document).ready(function () {
            $('.select2').select2({width: '100%'});
        });
    </script>
    <script>
        document.getElementById('status').addEventListener('change', function (e) {
            if (e.target.value === "On Truck") {
                document.getElementById('truck').style.display = 'block';
                document.getElementById('location').style.display = 'none';
                document.getElementById('location_q').removeAttribute('required');
                document.getElementById('truck_q').setAttribute('required', 'required');
                document.getElementById("location_q").selectedIndex = null;
            }
            if (e.target.value === "Out Of Service") {
                document.getElementById('truck').style.display = 'none';
                document.getElementById('location').style.display = 'block';
                document.getElementById('location_q').setAttribute('required', 'required');
                document.getElementById('truck_q').removeAttribute('required');
                $('#truck_q').val(null).trigger('change')

            }
            if (e.target.value === "In Inventory") {
                document.getElementById('truck').style.display = 'none';
                document.getElementById('location').style.display = 'block';
                document.getElementById('location_q').setAttribute('required', 'required');
                document.getElementById('truck_q').removeAttribute('required');
                $('#truck_q').val(null).trigger('change')
            }
        });
    </script>
@endpush
