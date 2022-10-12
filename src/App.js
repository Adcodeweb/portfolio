import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar";
import { Home } from "./Pages/Home";
import Project from "./Pages/project/Project";


function App() {


  return (

    <div className=" bg-black " >
      <BrowserRouter  >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
