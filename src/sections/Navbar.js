

function Navbar()
{
    return(
        <div class="theme-main-menu theme-menu-one fixed">
            <div class="logo"><a href="index.html"><img src="images/logo/logo.png   " alt="" /></a></div>
            <nav id="mega-menu-holder" class="navbar navbar-expand-lg">
                <div  class="container nav-container">
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="flaticon-setup"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul class="navbar-nav">
                            <li class="nav-item active dropdown">
                                <a href="index.html" class="nav-link dropdown-toggle" data-toggle="dropdown">Home.</a>

                            </li>
                        </ul>
                    </div>
                </div> 
            </nav>
            <div class="header-right-widget">
                <ul>
                    <li class="call-us">Call Us <a href="#">+91 9930814534</a></li>
                    <li><a href="contact-us-standard.html" class="contact-us white-shdw-button">Contact Us <i class="icon flaticon-next"></i></a></li>
                </ul>
            </div> 
        </div> 
    );
}

export default Navbar;