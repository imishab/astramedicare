
export default function Navbar() {
  return (
    <>
    {/* START MENU DESIGN AREA */}
    <header className="main-header">
      <div className="header-upper">
        <div className="container">
          <div className="header-inner d-flex align-items-center">
            {/* START LOGO DESIGN AREA */}
            <div className="logo-outer">
              <div className="logo">
                <a href="index.html">
                  <img
                    src="/img/logo.png"
                    width="100px"
                    alt="Logo"
                    title="Logo"
                  />
                </a>
              </div>
            </div>
            {/* / END LOGO DESIGN AREA */}
            {/* START NAV DESIGN AREA */}
            <div className="nav-outer clearfix mx-auto">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo">
                    <a href="index.html">
                      <img
                        src="/img/logo.png"
                        alt="Logo"
                        width="100px"
                        title="Logo"
                      />
                    </a>
                  </div>
                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div className="navbar-collapse collapse">
                  <ul className="navigation ">
                    <li>
                      <a className="nav-link-click text-black" href="#about">
                        Home
                      </a>
                    </li>
                    <li>
                      <a className="nav-link-click" href="#about">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="nav-link-click" href="#service">
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a className="nav-link-click" href="#works">
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a className="nav-link-click" href="#pricing">
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* / END NAV DESIGN AREA */}
            </div>
            <div className="menu-btns">
              <a className="nav-link-click me-4" href="#works">
                <i className="ri-phone-line" /> +91 999-999-999
              </a>
              <a href="#contact" className="theme-btn">
                Book a Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* / END MENU DESIGN AREA */}
  </>
  
  )
}
