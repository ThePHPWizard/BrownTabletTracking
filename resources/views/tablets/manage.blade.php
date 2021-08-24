@extends('layouts.app')
@section('content')
    <!-- ============================================================== -->
    <!-- Start Page Content -->
    <!-- ============================================================== -->
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">

        <!-- Main content -->
        <section class="content">
            <!-- Default box -->
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="card card-default">
                        <div class="card-header">
                            <h4 class="card-title m-b-0">Tablet Info:</h4>
                        </div>
                        <div class="card-body" style="margin-top: -20px">
                            <div class="row">
                                <div class="col-md-4"><strong>Mobile Number:</strong> {{ '('.substr($tablet->mobile_number, 0, 3).') '.substr($tablet->mobile_number, 3, 3).'-'.substr($tablet->mobile_number,6) }}</div>
                                <div class="col-md-4"><strong>IMEI:</strong> {{ $tablet->imei }}</div>
                                <div class="col-md-4"><strong>Status:</strong> {{ $tablet->status }}</div>
                            </div>
                            @if($tablet->status === 'On Truck')
                                <hr>
                                <h4 class="card-title m-b-0">Truck Info:</h4>
                                <div class="row">
                                    <div class="col-md-6">
                                        <strong>Organization:</strong> {{ $tablet->truck->organization }}</div>
                                    <div class="col-md-6"><strong>License
                                            Plate:</strong> {{ $tablet->truck->license_plate }}</div>
                                    <div class="col-md-6">
                                        <strong>Manufacturer:</strong> {{ $tablet->truck->manufacturer }}</div>
                                    <div class="col-md-6"><strong>Model:</strong> {{ $tablet->truck->model }}</div>
                                    <div class="col-md-6"><strong>Owner
                                            Operator:</strong> {{ $tablet->truck->owner_operator }}</div>
                                    <div class="col-md-6"><strong>Vehicle
                                            Axles:</strong> {{ $tablet->truck->vehicle_axles }}</div>
                                    <div class="col-md-6"><strong>TGT:</strong> {{ $tablet->truck->tgit }}</div>
                                    <div class="col-md-6"><strong>Vehicle
                                            Type:</strong> {{ $tablet->truck->vehicle_type }}</div>
                                    <div class="col-md-6"><strong>Vehicle ID:</strong> {{ $tablet->truck->vehicle_id }}
                                    </div>
                                    <div class="col-md-6"><strong>Year:</strong> {{ $tablet->truck->year }}</div>
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <form method="post" action="/tablets/{{ $tablet->id }}"
                          class="form-horizontal">
                        @csrf
                        <div class="card card-default">
                            <div class="card-header">
                                <h4 class="card-title m-b-0">Manage Tablet:</h4>
                            </div>
                            <div class="card-body">
                                <form class="col-md-12">
                                    <div class="form-group">

                                        <label>Status:</label><br>
                                        <select class="form-control"
                                                name="status" id="status">
                                            <option value="">Please Select...</option>
                                            <option value="Out Of Service"
                                                    @if($tablet->status === 'Out Of Service') selected="selected" @endif>
                                                Out Of Service
                                            </option>
                                            <option value="In Inventory"
                                                    @if($tablet->status === 'In Inventory') selected="selected" @endif>
                                                In Inventory
                                            </option>
                                            <option value="On Truck"
                                                    @if($tablet->status === 'On Truck') selected="selected" @endif>
                                                On Truck
                                            </option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <div id="location"
                                             @if($tablet->status === 'Out Of Service' || $tablet->status === 'In Inventory')style="display: block"
                                             @else style="display: none;" @endif>
                                            <label>Drop Location:</label><br>
                                            <select id="location_q" class="form-control"
                                                    name="office_id">
                                                <option value="">Please Select...</option>
                                                @foreach($offices as $office)
                                                    <option
                                                        value="{{ $office->id }}"
                                                        @if($tablet->office_id === $office->id) selected="selected" @endif>
                                                        {{ $office->city }}, {{ $office->state }}
                                                    </option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div id="truck"
                                             @if($tablet->status === 'On Truck') style="display: block"
                                             @else style="display: none;"
                                             @endif style="width: 100%;">
                                            <label>Please Select
                                                The Truck:</label><br>
                                            <select id="truck_q"
                                                    class="form-control select2"
                                                    name="truck_id">
                                                <option value="">Please Select...</option>
                                                @foreach($trucks as $truck)
                                                    <option value="{{ $truck->id }}"
                                                            @if($truck->id === $tablet->truck_id) selected="selected" @endif>
                                                        Truck
                                                        Number: {{ $truck->vehicle_id }}
                                                    </option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <button type="submit" class="btn btn-block btn-outline-info"><i
                                                    class="fa fa-check"></i> Update
                                            </button>
                                        </div>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
            <div class="col-lg-12 col-md-12">
                <div class="card card-default">
                    <div class="card-header">
                        <h4 class="card-title m-b-0">Tablet History</h4>
                    </div>
                    <div class="card-body">
                        <table id="transactions"
                               class="display nowrap table table-hover table-striped table-bordered"
                               cellspacing="0" width="100%">
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th>User</th>
                                <th>Status</th>
                                <th>Truck/Location</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody id="tablecontents">
                            @foreach($transactions as $transaction)
                                <tr>
                                    <td>{{ $transaction->Tab_UpdateWhen }}</td>
                                    <td>{{ $transaction->Tab_UpdateBy }}</td>
                                    <td>{{ $transaction->Tab_Status }}</td>
                                    <td>{{ $transaction->Tab_Location }}</td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </div>
    </section>
    <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
@endsection
@include('includes.datatables')
@include('includes.select2')
@push('styles')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.2/min/dropzone.min.css">
@endpush

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
    <script>
        $('#transactions').DataTable({
            "ordering": false
        });
    </script>
@endpush


