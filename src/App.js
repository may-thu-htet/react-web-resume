import { Fragment } from "react";
import Header from "./components/Header";
import profilePhoto from "./photos/Mth_CV_photo-modified.png";
import Contents from "./components/Contents";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <div className="content-container">
          <img
            className="profile-photo"
            alt="myProfilePhoto"
            src={profilePhoto}
          />
          <Routes>
            <Route path="/" element={<Contents />} />
          </Routes>
        </div>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
