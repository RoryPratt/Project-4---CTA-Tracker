import "../css/App.css";

function HomePage() {
  return (
    <>
      <div className="row bg-trans">
        <h1 className="text-center">Welcome To The CTA Tracker</h1>
      </div>
      <div className="row mt-5">
        <div className="col-12 text-center">
          <button
            onClick={() => (window.location.href = "/tracker")}
            className="btn btn-lg btn-primary"
          >
            Start Tracking Trains
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
