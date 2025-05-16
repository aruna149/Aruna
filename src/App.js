// import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Services from "./Service";
// import Blogs from "./Blogs";
// import Contact from "./Contact";
// import Footer from "./Footer";

// function App() {
//   return (
//     <div className="landing">
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="logo">Deepbrik Technologies</div>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About Us</Link></li>
//           <li><Link to="/services">Services</Link></li>
//           <li><Link to="/blogs">Blogs</Link></li>
//           <li><Link to="/contact">Contact Us</Link></li>
//         </ul>
//       </nav>

//       {/* Pages */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Service";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="landing">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">Deepbrik Technologies</div>
          <div
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </div>
      </nav>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
