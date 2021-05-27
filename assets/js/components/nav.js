'use strict';

const e = React.createElement;

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <nav className="navbar-react navbar navbar-default navbar-fixed-top">
        <div className="container">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav-collapse">
            <span className="sr-only">Toggle Navigation</span>
            <i className="fa fa-bars"></i>
          </button>
          <a href="index.html" className="navbar-brand">
            <img src="assets/logos/gemini_logo_wht.png" alt="Gemini Energy Logo" />
          </a>
          <div id="main-nav-collapse" className="navbar-split collapse navbar-collapse">
            <ul className="nav navbar-nav main-navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Our Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a href="/wind.html">wind</a></li>
                  <li><a href="/solar.html">solar</a></li>
                  <li><a href="/engineering.html">engineering</a></li>
                  <li><a href="/safetytraining.html">safety & training</a></li>
                  <li><a href="/experience.html">experience</a></li>
                </ul>
              </li>
              <li>
                <a href="/careers.html">Careers</a>
              </li>
              <li>
                <a href="/aboutus.html">About Us</a>
              </li>
              <li className="nav-button"><a href="https://tmail.tetratech.com/" target="_blank" className="as-button"><span className="btn btn-primary">GEMINI WEBMAIL</span></a></li>
              <li className="nav-button"><a href="https://tetratechinc.sharepoint.com/teams/GeminiEnergyServices/" target="_blank" className="as-button"><span className="btn btn-primary">TECHNICIAN SIGN IN</span></a></li>
            </ul>
          </div>

          <a href="http://www.tetratech.com" target="_blank" className="navbar-brand navbar-brand-right hide-mobile">
            <img src="assets/logos/TT_logo_wht.png" alt="Tetra Tech Logo" />
          </a>
        </div>
      </nav>
    );
  }
}

const domContainer = document.querySelector('#c-navbar');
ReactDOM.render(e(Navbar), domContainer);
