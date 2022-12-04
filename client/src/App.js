import {BrowserRouter, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";
import Footer from "./Footer";
import Signup from "./Signup";
import "./App.css";

function App() {
  return (
    <div className="main-body">
      <BrowserRouter>
        {/* <Switch className="sub-body"> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        {/* </Switch> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
