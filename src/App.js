import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";

function App() {
  return (
    <div className="app" id="home">

      <BrowserRouter  >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
