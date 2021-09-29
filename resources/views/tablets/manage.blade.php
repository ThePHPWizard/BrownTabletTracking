@extends('layouts.app')

@section('content')
    <link rel="stylesheet" href="https://printjs-4de6.kxcdn.com/print.min.css">
    <style>
        .toggle-attachment:hover {
            color: #0066FF;
        }

        .attachment-row {
            display: none;
        }

        .fa-file {
            color: #0066FF;
        }

        .each-project {
            margin-bottom: 20px;
        }

        @media print {
            body * {
                visibility: hidden;
            }

            .modal-content * {
                visibility: visible;
                overflow: visible;
                top: 0;
            }

            .modal-body {
                visibility: visible;
                overflow: visible !important;
            }

            .noPrint {
                display: none;
            }
        }

        .modal-dialog {
            max-width: 90%;
            height: auto;
        }

        .modal-body {
            height: auto;
            overflow-y: auto;
        }

        .loop-modal-wrap .adding-padding-header {
            padding: .5rem 5rem 0rem 5rem;
        }

        .loop-modal-wrap .adding-padding-body {
            padding: 0rem 3.6rem;
        }

        .loop-modal-wrap .adding-padding-footer {
            padding: 1rem 4rem;
        }

        .loop-modal-wrap .green-text {
            color: #4dc74f;
        }

        .loop-modal-wrap .timesheet-status {
            padding-top: 2.28rem;
        }

        .loop-modal-wrap .modal-header .close {
            padding: 1rem;
            margin: -1.2rem 0rem 0rem 1rem;
            color: #007bff;
            font-size: 2.5rem;
            font-weight: 400;
            opacity: 1;
        }

        .loop-modal-wrap .modal-header .print {
            margin: -.7rem 0rem -2rem auto;
            color: #007bff;
            font-size: 1.2rem;
            font-weight: 400;
            cursor: pointer;
        }

        .loop-modal-wrap hr.blue-line {
            margin-top: .5rem;
            margin-bottom: .5rem;
            border-top: 1px solid #007bff;
        }

        .loop-modal-wrap .each-project {
            padding: 2rem;
            border: 2px solid #e2e0e0;
        }

        .loop-modal-wrap .img-thumbnail {
            padding: 0rem 1rem;
            border: none;
            border-radius: unset;
            max-width: 15%;
        }
    </style>
    <div class="page-title">
        <div class="h1-accent"></div>
        <h1>My Time</h1>
        <span class="pl-3 pr-3">
            <div class="demo-week-submit ml-3">
                    <button type="submit" class="btn btn-primary">Demo</button>
            </div>
        </span>

        {{--        @if((Auth::user()->employee_type == 'Employee' || Auth::user()->employee_type == '1099 Contractor' || Auth::user()->employee_type == 'Candidate' || Auth::user()->employee_type == 'Subcontractor' || Auth::user()->employee_type == 'W2 Contractor' || Auth::user()->employee_type == 'Intern-Seasonal Employee' || Auth::user()->employee_type == 'Subcontractor Sole Prop' || Auth::user()->employee_type == 'Volunteer Trainee')--}}
        {{--                            && Auth::user()->is_manager == 0 && Auth::user()->is_pm == 0 && Auth::user()->is_tam == 0 && Auth::user()->is_rm == 0 && Auth::user()->is_admin == 0 && Auth::user()->is_super_admin == 0)--}}
        {{--        <h1 style="margin-left:820px">Receive SMS</h1>--}}
        {{--        <span class="pl-3 pr-3">--}}
        {{--            <div class="demo-week-submit ml-3">--}}
        {{--                @if(Auth::user()->manage_sms == 1)--}}
        {{--                    @if(Auth::user()->send_sms == 1)--}}
        {{--                        <input class="sms-check" type="checkbox" name=""  id="{{ Auth::user()->id }}"--}}
        {{--                               checked>--}}
        {{--                    @else--}}
        {{--                        <input class="sms-check" type="checkbox" name="" id="{{ Auth::user()->id }}">--}}
        {{--                    @endif--}}
        {{--                @else--}}
        {{--                    @if(Auth::user()->send_sms == 1)--}}
        {{--                        <input class="sms-check" type="checkbox" name="" disabled id="{{ Auth::user()->id }}"--}}
        {{--                               checked>--}}
        {{--                    @else--}}
        {{--                        <input class="sms-check" type="checkbox" name="" disabled id="{{ Auth::user()->id }}">--}}
        {{--                    @endif--}}
        {{--                @endif--}}
        {{--            </div>--}}
        {{--        </span>--}}
        {{--        @endif--}}
    </div>

    <div class="col-md-12 p-4">
        {!! Form::open(['url' => '/time/staff/week', 'id' => 'create_id', 'files' => true ]) !!}
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-3 pb-3">
                    <input type="hidden" name="userid" value="{{Auth::user()->portal_id}}">
                    <select class="form-control my-time-week" name="week" required="required" id="step-one">
                        <option value="">Select Week...</option>
                        @foreach($weeks_missing as $week)
                            <option value="{{ $week }}">Week of: {{ date('F d, Y', strtotime($week)) }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="col-md-4 offset-md-5">
                    <div class="text-right" style="margin-right:-5px;">
                        <input name="project-count" type="hidden" value="{{ $project_count }}">
                        <button type="submit" id="step-two" class="btn btn-primary create-new">
                            <i class="fa fa-plus"></i> Create New
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {!! Form::close() !!}
        <div class="col-sm-12">
            <div class="row">
                @if(!empty($weeks))
                    <div class="table-responsive m-t-40 p-2">
                        <table id="table_time" class="display table table-hover table-striped table-bordered"
                               cellspacing="0"
                               width="100%">
                            <thead>
                            <tr>
                                <th>Week Start</th>
                                <th>Week End</th>
                                <th>Total Hours</th>
                                <th>Status</th>
                                <th>Submitted</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($weeks as $week)
                                <?php
                                $date = Carbon\Carbon::now();
                                $date->setISODate(intval($week->year), intval($week->week));
                                $week_start = $date->copy()->startOfWeek();
                                $week_end = $date->copy()->endOfWeek();
                                ?>
                                <tr>
                                    <td>{{ date('m-d-Y', strtotime($week_start)) }}</td>
                                    <td>{{ date('m-d-Y', strtotime($week_end)) }}</td>
                                    <td>{{ $week->total_hours }}</td>
                                    <td> @if($week->status == 'denied')
                                            @if(isset($week->deny_message->message))
                                                <span class="d-inline-block" data-toggle="tooltip"
                                                      data-placement="bottom" title="
                                            {{$week->deny_message->message}}
                                                    ">
                                            @endif
                                            <div class="redcolor-deny"
                                                 style="pointer-events: none;">{{ ucwords($week->status) }}</div>
                                            </span>
                                            @else
                                                {{ ucwords($week->status) }}
                                            @endif
                                    </td>
                                    <td>{{ date('m-d-Y', strtotime($week->updated_at)) }}</td>
                                    <td class="text-center">
                                        <a href="/timesheet/details/{{ $week->id }}" class="eyeball-anchor-my-time"
                                           data-target="#modal-{{ $week->id }}" week_id="{{ $week->id }}"
                                           data-toggle="modal" title="View">
                                            <input class="hidden_week" name="week_id" type="hidden"
                                                   value="{{ $week->id }}">
                                            <i
                                                class="fa fa-eye pr-3"></i>
                                        </a>
                                        @if($week->status == 'saved' || $week->status == 'denied' || $week->approval_status == 'denied_by_pm' || $week->approval_status == 'denied_by_dm')
                                            <a href="/time/staff/add/{{ $week->year }}/{{ $week->week }}/{{Auth::user()->portal_id}}"
                                               title="Edit" style="margin-right:-22px;"><i class="fas fa-edit"></i></a>
                                    </td>
                                    @endif
                                    </td>
                                    <!-- MY TIME MODAL START -->
                                    <section>
                                        <div id="printJS-form" class="content">
                                            <div class="modal fade loop-modal-wrap" id="modal-{{ $week->id }}"
                                                 tabIndex="-1">
                                                <div class="modal-dialog">
                                                    <div class="modal-content mod-view">
                                                        <div class="modal-header">
                                                            <div class="container adding-padding-header">
                                                                <div class="row">
                                                                    <div class="col-sm-6">
                                                                        <h4 class="modal-title">{{ $week->user->name }}</h4>
                                                                        <h4 class="modal-title"><small>Week:
                                                                                {{ date('F d, Y', strtotime($week->mon)) }}
                                                                                - {{ date('F d, Y', strtotime($week->sun)) }}</small>
                                                                        </h4>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <h4 class="modal-title text-right timesheet-status">

                                                                            <small>Timesheet Status:
                                                                                @if($week->status === 'approved')
                                                                                    <span
                                                                                        class="green-text"> Approved by {{ \App\User::where('portal_id', $week->user->manager_id)->orWhere('portal_id', $week->user->timesheetmanager_id)->value('name') }}</span>
                                                                                @elseif($week->status === 'submitted')
                                                                                    <span
                                                                                        class="text-primary"> Pending</span>
                                                                                @elseif($week->status === 'denied')
                                                                                    <span
                                                                                        class="text-danger"> Denied</span>
                                                                                @elseif($week->status === 'saved')
                                                                                    <span
                                                                                        class="text-primary"> Saved</span>
                                                                                @endif
                                                                            </small>
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="float-right">
                                                                <div class="print">
                                                                    <a href="/pdf/print_modal/{{$week->id}}"
                                                                       target="_blank">
                                                                        <i class="fa fa-print"
                                                                           aria-hidden="true"></i>
                                                                    </a>
                                                                </div>
                                                                <button type="button" class="close" data-dismiss="modal"
                                                                        aria-label="Close"><span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>

                                                        </div>
                                                        <div class="modal-body">
                                                            <div class="row">
                                                                <div class="container adding-padding-body">
                                                                    @foreach($projects_info as $project)
                                                                        @foreach($week->time as $times)
                                                                            @if($project['project_id'] === $times->project_id)
                                                                                <div class="each-project">
                                                                                    <div
                                                                                        class="row font-weight-bold justify-content-center pb-3">

                                                                                        <div class="col-4">
                                                                                            Project
                                                                                            Name: {{$project['project_name']}}
                                                                                        </div>
                                                                                        <div class="col-3">
                                                                                            Project
                                                                                            ID: {{$project['project_number']}}
                                                                                        </div>
                                                                                        @foreach($project_hours as $hours)
                                                                                            @if($hours['project_id'] === $project['project_id'] && $hours['week_id'] === $week->id)
                                                                                                <div class="col-4">
                                                                                                    Total Project
                                                                                                    Hours: {{ $hours['hours'] }}
                                                                                                </div>
                                                                                            @endif
                                                                                        @endforeach
                                                                                    </div>

                                                                                    <div
                                                                                        class="row font-weight-bold  py-2 ">
                                                                                        <div class="col-2">
                                                                                            Task
                                                                                        </div>
                                                                                        <div class="col-1">
                                                                                            M
                                                                                        </div>
                                                                                        <div class="col-1">
                                                                                            T
                                                                                        </div>
                                                                                        <div class="col-1">
                                                                                            W
                                                                                        </div>
                                                                                        <div class="col-1">
                                                                                            R
                                                                                        </div>
                                                                                        <div class="col-1">
                                                                                            F
                                                                                        </div>
                                                                                        <div class="col-1">
                                                                                            S
                                                                                        </div>
                                                                                        <div class="col-1">
                                                                                            U
                                                                                        </div>
                                                                                        <div class="col-1">
                                                                                            Total
                                                                                        </div>
                                                                                        <div class="col-2">
                                                                                            Comments
                                                                                        </div>
                                                                                    </div>

                                                                                    <hr class="blue-line">
                                                                                    <?php
                                                                                    $project_total = 0;
                                                                                    ?>
                                                                                    @foreach($tasks as $t)
                                                                                        <?php
                                                                                        $mon = 0;
                                                                                        $tue = 0;
                                                                                        $wed = 0;
                                                                                        $thu = 0;
                                                                                        $fri = 0;
                                                                                        $sat = 0;
                                                                                        $sun = 0;
                                                                                        ?>
                                                                                        @if($t->project_id === $project['project_id'])
                                                                                            @foreach($week->time as $time)
                                                                                                @if($time->task_id === $t->id && $time->week_day === "mon")
                                                                                                    <?php $mon++ ?>
                                                                                                @endif
                                                                                                @if($time->task_id === $t->id && $time->week_day === "tue")
                                                                                                    <?php $tue++ ?>
                                                                                                @endif
                                                                                                @if($time->task_id === $t->id && $time->week_day === "wed")
                                                                                                    <?php $wed++ ?>
                                                                                                @endif
                                                                                                @if($time->task_id === $t->id && $time->week_day === "thu")
                                                                                                    <?php $thu++ ?>
                                                                                                @endif
                                                                                                @if($time->task_id === $t->id && $time->week_day === "fri")
                                                                                                    <?php $fri++ ?>
                                                                                                @endif
                                                                                                @if($time->task_id === $t->id && $time->week_day === "sat")
                                                                                                    <?php $sat++ ?>
                                                                                                @endif
                                                                                                @if($time->task_id === $t->id && $time->week_day === "sun")
                                                                                                    <?php $sun++ ?>
                                                                                                @endif
                                                                                            @endforeach
                                                                                            <?php
                                                                                            $total = $mon + $tue + $wed + $thu + $fri + $sat + $sun;
                                                                                            $total_hours = 0;
                                                                                            ?>
                                                                                            @if($total != 0)
                                                                                                <div class="row">
                                                                                                    <div class="col-2">
                                                                                                        {{ $t->name }}
                                                                                                    </div>

                                                                                                    @if($mon === 0)
                                                                                                        <div
                                                                                                            class="col-1">
                                                                                                            0.00
                                                                                                        </div>
                                                                                                    @else
                                                                                                        @foreach($week->time as $time)
                                                                                                            @if($time->task_id === $t->id && $time->week_day === "mon")
                                                                                                                <div
                                                                                                                    class="col-1">
                                                                                                                    {{ $time->hours }}
                                                                                                                    <?php $total_hours += $time->hours ?>
                                                                                                                </div>
                                                                                                            @endif
                                                                                                        @endforeach
                                                                                                    @endif

                                                                                                    @if($tue === 0)
                                                                                                        <div
                                                                                                            class="col-1">
                                                                                                            0.00
                                                                                                        </div>
                                                                                                    @else
                                                                                                        @foreach($week->time as $time)
                                                                                                            @if($time->task_id === $t->id && $time->week_day === "tue")
                                                                                                                <div
                                                                                                                    class="col-1">
                                                                                                                    {{ $time->hours }}
                                                                                                                    <?php $total_hours += $time->hours ?>
                                                                                                                </div>
                                                                                                            @endif
                                                                                                        @endforeach
                                                                                                    @endif

                                                                                                    @if($wed === 0)
                                                                                                        <div
                                                                                                            class="col-1">
                                                                                                            0.00
                                                                                                        </div>
                                                                                                    @else
                                                                                                        @foreach($week->time as $time)
                                                                                                            @if($time->task_id === $t->id && $time->week_day === "wed")
                                                                                                                <div
                                                                                                                    class="col-1">
                                                                                                                    {{ $time->hours }}
                                                                                                                    <?php $total_hours += $time->hours ?>
                                                                                                                </div>
                                                                                                            @endif
                                                                                                        @endforeach
                                                                                                    @endif

                                                                                                    @if($thu === 0)
                                                                                                        <div
                                                                                                            class="col-1">
                                                                                                            0.00
                                                                                                        </div>
                                                                                                    @else
                                                                                                        @foreach($week->time as $time)
                                                                                                            @if($time->task_id === $t->id && $time->week_day === "thu")
                                                                                                                <div
                                                                                                                    class="col-1">
                                                                                                                    {{ $time->hours }}
                                                                                                                    <?php $total_hours += $time->hours ?>
                                                                                                                </div>
                                                                                                            @endif
                                                                                                        @endforeach
                                                                                                    @endif

                                                                                                    @if($fri === 0)
                                                                                                        <div
                                                                                                            class="col-1">
                                                                                                            0.00
                                                                                                        </div>
                                                                                                    @else
                                                                                                        @foreach($week->time as $time)
                                                                                                            @if($time->task_id === $t->id && $time->week_day === "fri")
                                                                                                                <div
                                                                                                                    class="col-1">
                                                                                                                    {{ $time->hours }}
                                                                                                                    <?php $total_hours += $time->hours ?>
                                                                                                                </div>
                                                                                                            @endif
                                                                                                        @endforeach
                                                                                                    @endif

                                                                                                    @if($sat === 0)
                                                                                                        <div
                                                                                                            class="col-1">
                                                                                                            0.00
                                                                                                        </div>
                                                                                                    @else
                                                                                                        @foreach($week->time as $time)
                                                                                                            @if($time->task_id === $t->id && $time->week_day === "sat")
                                                                                                                <div
                                                                                                                    class="col-1">
                                                                                                                    {{ $time->hours }}
                                                                                                                    <?php $total_hours += $time->hours ?>
                                                                                                                </div>
                                                                                                            @endif
                                                                                                        @endforeach
                                                                                                    @endif

                                                                                                    @if($sun === 0)
                                                                                                        <div
                                                                                                            class="col-1">
                                                                                                            0.00
                                                                                                        </div>
                                                                                                    @else
                                                                                                        @foreach($week->time as $time)
                                                                                                            @if($time->task_id === $t->id && $time->week_day === "sun")
                                                                                                                <div
                                                                                                                    class="col-1">
                                                                                                                    {{ $time->hours }}
                                                                                                                    <?php number_format((float)$total_hours += $time->hours, 2, '.', '') ?>
                                                                                                                </div>
                                                                                                            @endif
                                                                                                        @endforeach
                                                                                                    @endif
                                                                                                    <div
                                                                                                        class="col-1 total-hrs">
                                                                                                        <?php
                                                                                                        $project_total += $total_hours;
                                                                                                        ?>
                                                                                                        {{ number_format((float) $total_hours, 2, '.', '') }}

                                                                                                    </div>
                                                                                                    <div class="col-2">
                                                                                                        @foreach($week->time as $time)
                                                                                                            @if($t->id === $time->task_id)
                                                                                                                {{ $time->description }}
                                                                                                                @break
                                                                                                            @endif
                                                                                                        @endforeach
                                                                                                    </div>
                                                                                                </div>
                                                                                            @endif
                                                                                        @endif
                                                                                    @endforeach
                                                                                    <hr>
                                                                                    @if($week->user->employee_type == "Corporate Employee" || $week->user->employee_type == "Volunteer Trainee" || $week->user->employee_type == "Intern-Seasonal Employee")
                                                                                        <p class="pt-3">Project Status:
                                                                                            @if($project['project_name'] === 'Leave' || $project['project_name'] === 'Holiday(US)' || $project['project_name'] === 'Holiday(India)')
                                                                                                <span
                                                                                                    class="green-text"> Approved</span>
                                                                                            @elseif($times->approval_status === 'approved_by_pm' || $times->approval_status === 'approved_by_tm' || $times->approval_status === 'approved_by_dm')
                                                                                                <span
                                                                                                    class="green-text"> Approved by {{$project['project_manager_name']}}</span>
                                                                                            @elseif($times->approval_status === 'pending_pm_approval')
                                                                                                <span
                                                                                                    class="text-primary"> Pending Approval by {{$project['project_manager_name']}}</span>
                                                                                            @elseif($week->status == 'denied')
                                                                                                @if(\App\User::where('id', $week->emails[0]->denied_manager_id)->value('portal_id') == $week->user->manager_id)
                                                                                                    <span
                                                                                                        class="text-danger"> Timesheet Denied by Reporting Manager : {{ $week->emails[0]->manager_name }}</span>
                                                                                                @else
                                                                                                    <span
                                                                                                        class="text-danger"> Timesheet Denied by {{$project['project_manager_name']}}</span>
                                                                                        @if($week->status == 'denied')
                                                                                            @if(isset($week->deny_message->message))
                                                                                                <p class="redcolor-deny">
                                                                                                    <strong>Deny
                                                                                                        Message
                                                                                                        : </strong>
                                                                                                    {{$week->deny_message->message}}
                                                                                                </p>
                                                                                                @endif
                                                                                                @endif
                                                                                                @endif
                                                                                                @endif
                                                                                                </p>
                                                                                            @elseif($week->user->employee_type == 'Employee' || $week->user->employee_type == "1099 Contractor" || $week->user->employee_type == "Subcontractor" || $week->user->employee_type == "W2 Contractor" || $week->user->employee_type == 'Candidate' || $week->user->employee_type == "Subcontractor Sole Prop")
                                                                                                @if($times->project->email_flag === 1 && $week->status != 'saved')
                                                                                                    @if(count($week->clientemail)>0)
                                                                                                        <?php $p_client_status = \App\ClientEmail::where('u_id', $week->clientemail[0]->u_id)->where('project_id', $project['project_id'])->get(); ?>
                                                                                                        @if(count($p_client_status) > 0)
                                                                                                            <p class="pt-3">
                                                                                                                Project
                                                                                                                Status:
                                                                                                                @if($p_client_status[0]->status === 'submitted')
                                                                                                                    <span
                                                                                                                        class="text-primary"> Pending Client Approval by {{ $times->project->client_manager_name }}</span>
                                                                                                                @elseif($p_client_status[0]->status === 'approved')
                                                                                                                    <span
                                                                                                                        class="green-text"> Approved by Client</span>
                                                                                                                @elseif($p_client_status[0]->status === 'denied')
                                                                                                                    <span
                                                                                                                        class="text-danger"> Denied by Client</span>
                                                                                                            @if(isset($week->deny_message->message))
                                                                                                                <p class="redcolor-deny">
                                                                                                                    <strong>Deny
                                                                                                                        Message
                                                                                                                        : </strong>
                                                                                                                    {{$week->deny_message->message}}
                                                                                                                </p>
                                                                                                                @endif
                                                                                                                @endif
                                                                                                                @endif
                                                                                                                </p>
                                                                                                            @endif

                                                                                                        @endif
                                                                                                    @endif

                                                                                                    @foreach($week->documents as $d)
                                                                                                        @if($d->project_number === $project['project_number'])
                                                                                                            <div
                                                                                                                class="row pl-3">
                                                                                                                <!-- trigger show/hide attachment -->
                                                                                                                <p class="m-0">
                                                                                                                    View
                                                                                                                    Attachment</p>
                                                                                                                <!-- PHP FOR LOOP HERE, FOR EACH DOCUMENT AS D, ASSIGN PROJ ID TO BUTTON BELOW AND
                                                                                                                    ATTACHMENT ROW TO SHOW HIDE ONE ATTACHMENT PER PROJECT -->
                                                                                                                <button
                                                                                                                    id="{{$d->project_number}}"
                                                                                                                    class="toggle-attachment btn d-inline-flex p-0">
                                                                                                                    <i
                                                                                                                        class="fas fa-file text-primary fa-lg pl-2 pt-1"
                                                                                                                        aria-hidden="true"></i>
                                                                                                                </button>
                                                                                                                @break
                                                                                                                @endif
                                                                                                                @endforeach
                                                                                                                <div
                                                                                                                    class="container">
                                                                                                                    <!-- show/hide attachment, set row css to display: none initially-->
                                                                                                                    <div
                                                                                                                        id="attachment-{{$d->project_number}}"
                                                                                                                        class="row attachment-row ">

                                                                                                                        <div
                                                                                                                            class="col-sm-12 text-center mt-4">
                                                                                                                            @foreach($week->documents as $d)
                                                                                                                                @if($d->project_number === $project['project_number'])
                                                                                                                                    <div
                                                                                                                                        class="d-none"> {{ $upload_ext = \File::extension($d->document_name) }} </div>
                                                                                                                                    @if($upload_ext == "pdf")
                                                                                                                                        <br/>
                                                                                                                                        <br/>
                                                                                                                                        <iframe
                                                                                                                                            src="/{{ $d->document_name }}"
                                                                                                                                            width='800'
                                                                                                                                            height='600'
                                                                                                                                            allowfullscreen
                                                                                                                                            webkitallowfullscreen
                                                                                                                                        ></iframe>

                                                                                                                                    @endif
                                                                                                                                @endif
                                                                                                                            @endforeach
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            @break
                                                                                                        @endif
                                                                                                    @endforeach
                                                                                                    @endforeach
                                                                                </div>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="modal-footer adding-padding-footer">
                                                                <div class="container">
                                                                    <div
                                                                        class="col total-hours d-inline-flex justify-content-between">
                                                                        <p>
                                                                            <strong>
                                                                                Total Hours
                                                                                : {{ $week->total_hours }}
                                                                                <br>
                                                                            </strong>
                                                                        </p>

                                                                        @if($week->status == 'denied')
                                                                            @if(isset($week->deny_message->message))
                                                                                <p class="redcolor-deny">
                                                                                    <strong>Deny
                                                                                        Message
                                                                                        : </strong>
                                                                                    {{$week->deny_message->message}}
                                                                                </p>
                                                                            @endif
                                                                        @endif

                                                                    </div>
                                                                    <input type="hidden"
                                                                           name="_token"
                                                                           value="{{ csrf_token() }}">
                                                                    <input type="hidden"/>


                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </section>
                                    <!-- end modals loop -->

                                    <!-- MY TIME MODAL END -->

                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                @endif
            </div>
        </div>

    </div>
@endsection
@include('includes.datatables')
@push('scripts')
    <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
    <script type="text/javascript" src="https://printjs-4de6.kxcdn.com/print.min.js"></script>


    <script>
        $(document).ready(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
        // this is how to show/hide attachment
        $(".toggle-attachment").on("click", function () {
            const id = $(this).attr("id");
            $(`#attachment-${id}.attachment-row`).toggle();
            document.getElementById(`attachment-${id}`).focus()
        })
        $(".sms-check").on("click", function () {
            let user_Id = $(this).attr("id");
            console.log("user_Id", user_Id);
            let status = $(this).prop("checked");
            console.log("status", status)
            $.ajax({
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                },
                method: "POST",
                url: `/users/sms2`,
                data: {
                    user_id: user_Id,
                    status: status,
                },
            })
                .done(function (result, status, xhr) {
                    toastr.success(
                        "SMS Status Updated"
                    );
                })
                .fail(function (xhr, status, error) {
                    toastr.error(
                        "Checkbox failed to save. Please check the console and find a developer near you.",
                        "Change failed"
                    );
                    console.log(
                        "Result: " +
                        status +
                        " " +
                        error +
                        " " +
                        xhr.status +
                        " " +
                        xhr.statusText
                    );
                });
        })
    </script>
@endpush
