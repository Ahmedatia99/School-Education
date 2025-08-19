import Home from "./pages/Home";
import About from "./pages/About";
import Academic from "./pages/Academic";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Banner from "./components/common/Banner";

function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academic" element={<Academic />} />
      </Routes>
    </>
  );
}

export default App;
