import "./App.css";
import Landing from "./landing/landing";
import Navigation from "./toolComponents/navigation/navigation";
import Newnav from "./toolComponents/newnav/newnav";
import Newlanding from "./pages/newlanding/newlanding";
import Footer from "./toolComponents/footer/footer";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

const Pages = () => {
  return (
    <div
      style={{
        backgroundColor: "#F9F5F6",
        fontFamily: "'Quattrocento Sans', sans-serif",
      }}
    >
      <Newnav />
      <Routes>
        <Route path="/" element={<Newlanding />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Pages />
      </Router>
    </div>
  );
}

export default App;
