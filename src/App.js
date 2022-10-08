import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Pages/Home";


function App() {


  return (
    <div className="" >
      <BrowserRouter  >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
