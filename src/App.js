import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// importing component
import Header from "./components/Header";
import Home from "./components/Home";
import Videos from "./components/Videos";
import Upload from "./components/Upload";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>

      <Header /> 
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
      <Footer />
      {/* 3:58 time stamp */}

    </Router>
  );
}

export default App;
