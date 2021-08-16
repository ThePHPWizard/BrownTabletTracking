<header class="topbar">
    <nav class="navbar top-navbar navbar-expand-md navbar-light">
        <!-- ============================================================== -->
        <!-- Logo -->
        <!-- ============================================================== -->
        <span class="navbar-header">
            <a class="navbar-brand" href="#">
                    <div id="small-logo" style="display: none">
                        <b>
                    <img src="/images/small-logo.png" alt="homepage"  class="dark-logo" style="width:40px;" />
                            </b>
                        </div>

                <span id="large-logo" style="margin-left: -10px">
                    <img src="/images/logo.png" alt="homepage" class="dark-logo" style="height:70px;" />
                </span>
            </a>
            </span>
        <!-- ============================================================== -->
        <!-- End Logo -->
        <!-- ============================================================== -->
        <div class="navbar-collapse">
            <!-- ============================================================== -->
            <!-- toggle and nav items -->
            <!-- ============================================================== -->
            <ul class="navbar-nav mr-auto mt-md-0">
                <!-- This is  -->
                <li class="nav-item"> <a class="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark" href="javascript:void(0)" ><i class="mdi mdi-menu"></i></a></li>
                <li class="nav-item m-l-10"> <a class="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark" href="javascript:void(0)" onclick="hideLogo()"><i class="ti-menu"></i></a> </li>
                <script>
                    function hideLogo() {
                        var x = document.getElementById("large-logo");
                        if (window.getComputedStyle(x).display === "none") {
                            document.getElementById('small-logo').style.display = 'none';
                            document.getElementById('large-logo').style.display = 'block';
                        } else {
                            document.getElementById('small-logo').style.display = 'block';
                            document.getElementById('large-logo').style.display = 'unset';
                        }

                    }
                </script>
            </ul>
            <!-- ============================================================== -->
            <!-- User profile and search -->
            <!-- ============================================================== -->
            <ul class="navbar-nav my-lg-0">
                <!-- ============================================================== -->
                <!-- Search -->
                <!-- ============================================================== -->
                <li class="nav-item hidden-sm-down search-box"> <a class="nav-link hidden-sm-down text-muted waves-effect waves-dark" href="javascript:void(0)"><i class="ti-search"></i></a>
                    <form class="app-search">
                        <input type="text" class="form-control" placeholder="Search & enter"> <a class="srh-btn"><i class="ti-close"></i></a> </form>
                </li>
                <!-- ============================================================== -->
                <!-- Profile -->
                <!-- ============================================================== -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="mdi mdi-36px mdi-account"></i></a>
                    <div class="dropdown-menu dropdown-menu-right scale-up">
                        <ul class="dropdown-user">
                            <li>
                                <div class="dw-user-box">
                                    <div class="u-img"><i class="mdi mdi-48px mdi-account"></i></div>
                                    <div class="u-text">
                                        <h4>{{ Auth::user()->name }}</h4>
                                        <p class="text-muted">{{ Auth::user()->email }}</p></div>
                                </div>
                            </li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#"><i class="mdi mdi-account"></i> My Profile</a></li>
                            <!--<li><a href="#"><i class="ti-wallet"></i> My Balance</a></li>-->
                            <!--<li><a href="#"><i class="ti-email"></i> Inbox</a></li>-->
                            <li role="separator" class="divider"></li>
                            <li><a href="#"><i class="ti-settings"></i> Account Setting</a></li>
                            <li><a href="#"><i class="ti-alert"></i> My Alerts</a></li>
                            <!--<li role="separator" class="divider"></li>-->
                                <li><a href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();"><i class="fa fa-power-off"></i> Logout</a>

                                        <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                              style="display: none;">
                                            @csrf
                                        </form>
                                </li>
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
