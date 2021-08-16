@if(empty($tablet))
    {!! Form::open(['url' => '/tablets/create', 'files' => true]) !!}
@else
    {!! Form::model($tablet, ['url' => '/tablets/' . $tablet->id, 'method' => 'put', 'files' => true ]) !!}
@endif

<div class="row">
    <div class="col-md-4">
        <label class="required" for="imei">IMEI</label>
        <p>{!! Form::text('imei', null, ['class' => 'form-control', 'required' => 'required']) !!}</p>
    </div>
    <div class="col-md-4">
        <label class="required" for="name">Name</label>
        <p>{!! Form::text('name', null, ['class' => 'form-control', 'required' => 'required']) !!}</p>
    </div>
    <div class="col-md-4">
        <label class="required" for="mobile_number">Mobile Number</label>
        <p>{!! Form::text('mobile_number', null, ['class' => 'form-control', 'required' => 'required']) !!}</p>
    </div>

</div>
<div class=" pt-2">
    @if(empty($tablet))
        {!! Form::submit('Create', ['class' => 'btn btn-info', 'onclick' => 'start_loading()']) !!}
    @else
        {!! Form::submit('Update', ['class' => 'btn btn-info', 'onclick' => 'start_loading()']) !!}
    @endif
    {!! Form::close() !!}
</div>
