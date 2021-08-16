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
                                    <th>Name</th>
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
                                        <td>{{ $tablet->name }}</td>
                                        <td>{{ $tablet->mobile_number }}</td>
                                        <td>{{ $tablet->imei }}</td>
                                        <td>{{ $tablet->status }}</td>
                                        @if(isset($tablet->truck))
                                            <td>Plate Number: {{ $tablet->truck->license_plate }}</td>
                                        @else
                                            <td>{{ $tablet->location }}</td>
                                        @endif
                                        <td>
                                            <a href="/tablets/{{ $tablet->id }}/manage"
                                               class="btn btn-outline-info btn-sm"><i class="fa fa-cogs"></i> Manage</a>
                                            <a href="" data-target="#modal-{{ $tablet->id }}" data-toggle="modal"
                                               class="btn btn-outline-info btn-sm"><i class="fa fa-eye"></i> Quick View</a>

                                            <div class="modal fade" id="modal-{{ $tablet->id }}"
                                                 tabIndex="-1">
                                                <div class="modal-dialog" style="max-width: 60%; height: 80%">
                                                    <div class="modal-content">
                                                        <form method="post" action="/tablets/{{ $tablet->id }}"
                                                              class="form-horizontal">

                                                            <div class="modal-header">
                                                                <h4 class="modal-title">{{ $tablet->name }}?</h4>
                                                            </div>
                                                            <div class="modal-body">
                                                                <div class="row">
                                                                    <div class="col-md-6">
                                                                        <h4>Name: {{ $tablet->name }}</h4>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <h4>Mobile
                                                                            Number: {{ $tablet->mobile_number }}</h4>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <h4>IMEI: {{ $tablet->imei }}</h4>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <h4>Status: {{ $tablet->status }}</h4>
                                                                    </div>
                                                                </div>
                                                                <hr>
                                                                <h2>Quick Update:</h2>

                                                                <div class="col-md-12">
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
                                                                            <label>Location:</label><br>
                                                                            <select id="location_q" class="form-control"
                                                                                    name="location">
                                                                                <option value="">Please Select...</option>
                                                                                <option value="Drop Location"
                                                                                        @if($tablet->status === 'Drop Location') selected="selected" @endif>
                                                                                    Drop Location
                                                                                </option>
                                                                                <option
                                                                                    value="Terminal Or Office"
                                                                                    @if($tablet->status === 'Terminal Or Office') selected="selected" @endif>
                                                                                    Terminal Or Office
                                                                                </option>
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
                                                                                        Plate
                                                                                        Number: {{ $truck->license_plate }}
                                                                                    </option>
                                                                                @endforeach
                                                                            </select>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <input type="hidden" name="_token"
                                                                       value="{{ csrf_token() }}">
                                                                <input type="hidden"/>
                                                                <button type="button" class="btn btn-default"
                                                                        data-dismiss="modal">Go Back
                                                                </button>
                                                                <button type="submit"
                                                                        class="btn btn-outline-info"><i
                                                                        class="fa fa-check"></i>
                                                                    Update
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
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
