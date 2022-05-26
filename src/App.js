import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";

function App() {
  return (
    <div className="bg-rose-100">
      <NavBar>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </NavBar>
    </div>
  );
}

export default App;