import "../css/App.css";
import house from "../assets/house.svg";
import train from "../assets/train-front.svg";
import person from "../assets/person.svg";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="container-fluid navbar-expand light-grey">
        <a className="navbar-brand" href="#">
          CTA Tracker
        </a>
        <div className="collapse navbar-collapse d-flex justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link vstack" href="/">
                <img className="icon" src={house}></img>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link vstack" href="/tracker">
                <img className="icon" src={train}></img>
                Tracker
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link vstack" href="/about">
                <img className="icon" src={person}></img>
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
