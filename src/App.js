// import './App.css';
import Landing from "./landing/landing";
import Navigation from "./toolComponents/navigation/navigation";
import Newnav from "./toolComponents/newnav/newnav";
import Newlanding from "./pages/newlanding/newlanding";
import Footer from "./toolComponents/footer/footer";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

const Pages = () => {
  return (
    <div style={{ backgroundColor: "#F9F5F6" }}>
      <Newnav />
      <Routes>
        <Route path="/" element={<Newlanding />}></Route>
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
