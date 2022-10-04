import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar";
import CreatePost from "./pages/create-post/CreatePost";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";

function App() {
  return (
    <div className="app" id="home">

      <BrowserRouter  >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
