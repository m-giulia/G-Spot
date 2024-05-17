import {Link } from "react-router-dom"; 

function Nav() {
  window.onscroll = function() {glassmorph()};

  function glassmorph() {
    if (document.documentElement.scrollTop > 350) {
      document.getElementsByTagName('header')[0].className = 'fixed-top';
      document.getElementsByTagName('header')[0].classList.add('glassmorph');
      document.querySelector('.back-to-top').classList.remove('opacity-0');
    } else {
      document.getElementsByTagName('header')[0].classList.remove('fixed-top');
      document.getElementsByTagName('header')[0].classList.remove('glassmorph');
      document.querySelector('.back-to-top').classList.add('opacity-0');
      
    }
  }

  return (
    <>
      <header className="">
        <nav className="navbar navbar-expand-lg navbar-light navbar-toggled-show" data-sticky="top">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img className="logo" src="../public/images/gspot-logo.png" alt="G Spot logo"/>
            </a>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <img className="icon navbar-toggler-open burger-black" src="../public/icon/burger-menu-black.svg" alt="menu icon open"/>
              <img className="icon navbar-toggler-close close-black" src="../public/icon/x-black.svg" alt="menu icon close"/>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="py-2 py-lg-0">
                <div className="navbar-nav">
                
                  <Link to="/" className="nav-link active">Home</Link>
                  <Link to="/about" className="nav-link">About</Link>
                  <Link to="/blog" className="nav-link">Blog</Link>
                  <Link to="/donations" className="nav-link">Donations</Link>
                  

                  {/* <a href="#home" className="nav-link active" aria-current="page">Home</a>
                  <a href="#about" className="nav-link">About</a>
                  <a href="#colours" className="nav-link">Colours</a>
                  <a href="#justincase" className="nav-link">Just in case</a> */}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Nav
