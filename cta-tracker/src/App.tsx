import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage.tsx";
import NavBar from "./components/navbar.tsx";
import CTATracker from "./pages/ctatracker.tsx";
import AboutUs from "./pages/aboutus.tsx";
import "./css/App.css";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tracker" element={<CTATracker />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
