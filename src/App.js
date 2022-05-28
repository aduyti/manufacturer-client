import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import AllProducts from "./Pages/AllProducts";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="bg-rose-100/50">
      <NavBar>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </NavBar>
    </div>
  );
}

export default App;