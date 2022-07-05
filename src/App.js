import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";

function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path ="/" element={<Home />}/>
      <Route path ="/about" element={<About />}/>
      <Route path="/projects" element={<Projects />}/>
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
