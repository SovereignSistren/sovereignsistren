// import Carousel from "./component/carousel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Navbar from "./component/Navbar";
import "./styles.css";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Health from "./pages/Health";
import Cat from "./pages/cat";
import Live from "./pages/Live";
import Safe from "./pages/Safe";
import Cycle from "./pages/Cycle";

// import notFound from "./pages/notFound";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/article" element={<Article />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Signup />} />
        {/* <Route path="*" element={<notFound />} /> */}
        <Route exact path="/Health" element={<Health />} />
        <Route exact path="/cat" element={<Cat />} />
        <Route exact path="/Live" element={<Live />} />
        <Route exact path="/Safe" element={<Safe />} />
        <Route exact path="/Cycle" element={<Cycle />} />
      </Routes>
    </Router>
  );
}
