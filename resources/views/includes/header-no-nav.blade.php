<div id="main-wrapper">
    <!-- ============================================================== -->
    <!-- Topbar header - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <header class="topbar">
        <nav class="navbar top-navbar navbar-expand-md navbar-light">
            <!-- ============================================================== -->
            <!-- Logo -->
            <!-- ============================================================== -->
            <div class="navbar-header">
                <a class="navbar-brand" href="/">
                    <!-- Logo icon --><b>
                        <!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
                        <!-- Dark Logo icon -->
                        <!-- Light Logo icon -->
{{--                        <img src="https://f43ok1bzovk2qvj131kjcvn7-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/Group-581.svg" alt="homepage" class="light-logo"/>--}}
                    </b>
                    <!--End Logo icon -->
                    <!-- Logo text --><span>
                         <!-- dark Logo text -->
                        <!-- Light Logo text -->
                         <img src="https://f43ok1bzovk2qvj131kjcvn7-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/Group-581.svg" class="light-logo" alt="homepage" width="225px"/></span> </a>
            </div>
            <!-- ============================================================== -->
            <!-- End Logo -->
            <!-- ============================================================== -->
            <div class="navbar-collapse">
                <!-- ============================================================== -->
                <!-- toggle and nav items -->
                <!-- ============================================================== -->
                <ul class="navbar-nav mr-auto mt-md-0">
                    <!-- This is  -->
                    <li class="nav-item"><a class="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark"
                                            href="javascript:void(0)"><i class="mdi mdi-menu"></i></a></li>
                </ul>
                <!-- ============================================================== -->
                <!-- User profile and search -->
                <!-- ============================================================== -->
                <ul class="navbar-nav my-lg-0">
                    <!-- ============================================================== -->
                    <!-- Search -->
                    <!-- ============================================================== -->
                    <li class="nav-item hidden-sm-down search-box"><a
                            class="nav-link hidden-sm-down text-muted waves-effect waves-dark"
                            href="javascript:void(0)"><i class="ti-search"></i></a>
                        <form class="app-search">
                            <input type="text" class="form-control" placeholder="Search & enter"> <a class="srh-btn"><i
                                    class="ti-close"></i></a></form>
                    </li>
                    <!-- ============================================================== -->
                    <!-- Profile -->
                    <!-- ============================================================== -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-muted" href="" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false"><i alt="user" class="fa fa-user-o"></i></a>
                        <div class="dropdown-menu dropdown-menu-right scale-up">
                            <ul class="dropdown-user">
                                <li>
                                    <div class="dw-user-box">
                                        <div class="u-img"><img
                                                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                                                alt="user"></div>
                                        <div class="u-text">
                                            <h4>{{ auth()->user()->name }}</h4>
                                            <p class="text-muted">{{ auth()->user()->email }}</p></div>
                                    </div>
                                </li>
                                <li><a href="{{ route('logout') }}"
                                       onclick="event.preventDefault();document.getElementById('logout-form').submit();"><i
                                            class="fa fa-power-off"></i> Logout</a></li>
                                <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                      style="display: one;">
                                    {{ csrf_field() }}
                                </form>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <!-- ============================================================== -->
    <!-- End Topbar header -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- Left Sidebar - style you can find in sidebar.scss  -->
    <!-- ============================================================== -->
    <aside class="left-sidebar">
        <!-- Sidebar scroll-->
        <div class="scroll-sidebar">
            <!-- Sidebar navigation-->
            <nav class="sidebar-nav">
                <ul id="sidebarnav">
                        <li>
                            <a href="/" aria-expanded="false"><i class="fa fa-dashboard"></i><span
                                    class="">Dashboard</span></a>
                        </li>
                        <li>
                            <a href="/assistance" aria-expanded="false"><i class="fa fa-handshake"></i><span
                                    class="hide-menu">Assistance</span></a>
                        </li>
                        <li>
                            <a href="/career_exploration" aria-expanded="false"><i class="fa fa-search"></i><span
                                    class="hide-menu">Career Exploration</span></a>
                        </li>
                        <li>
                            <a href="/training" aria-expanded="false"><i class="fa fa-graduation-cap"></i><span
                                    class="hide-menu">Career Training and Development</span></a>
                        </li>
                        <li>
                            <a href="/events" aria-expanded="false"><i class="fa fa-calendar"></i><span
                                    class="hide-menu">Events</span></a>
                        </li>
                    <li>
                        <a href="/workshops" aria-expanded="false"><i class="fa fa-users"></i><span
                                class="hide-menu">Workshops</span></a>
                    </li>
                        <li>
                            <a href="/tools" aria-expanded="false"><i class="fa fa-wrench"></i><span
                                    class="hide-menu">Tools and Resources</span></a>
                        </li>

                </ul>
            </nav>
            <!-- End Sidebar navigation -->
        </div>
        <!-- End Sidebar scroll-->
    </aside>
    <!-- ============================================================== -->
    <!-- End Left Sidebar - style you can find in sidebar.scss  -->
    <!-- ============================================================== -->
