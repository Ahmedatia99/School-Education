import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Banner from "./components/common/Banner";
import Footer from "./components/common/Footer";
import ContactPage from "./pages/ContactPage";
function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
