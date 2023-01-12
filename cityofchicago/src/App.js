import "./App.css";
import Art from "./Art.jsx";
import Navbar from "./components/Navbar.js";
import Home from "./components/pages/Home.js";
import AboutUs from "./components/pages/AboutUs.js";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/pages/SignUp.js";
import JoinaTour from "./components/pages/JoinaTour.js";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/artworks" exact element={<Art />} />
            <Route path="/aboutus" exact element={<AboutUs />} />
            <Route path="/joinTour" exact element={<JoinaTour />} />
            <Route path="/sign-up" exact element={<SignUp />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
