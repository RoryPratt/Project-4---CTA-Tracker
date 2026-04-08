import avatar from "../assets/avatar.png";
import "../css/App.css";

function AboutUs() {
  return (
    <section className="py-5 bg-trans">
      <div className="container">
        <div className="row align-items-center gx-4">
          <div className="col-md-5">
            <div className="ms-md-2 ms-lg-5">
              <img className="img-fluid rounded-circle" src={avatar} />
            </div>
          </div>
          <div className="col-md-6 offset-md-1">
            <div className="ms-md-2 ms-lg-5">
              <span className="text-muted">My Story</span>
              <h2 className="display-5 fw-bold">About Me</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </p>
              <p className="lead mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
