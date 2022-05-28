import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import AllProducts from "./Pages/AllProducts";
import NotFound from "./Pages/NotFound";
import Portfolio from "./Pages/Portfolio";
import MyProfile from "./Pages/MyProfile";
import Purchase from "./Pages/Purchase";

function App() {
  return (
    <div className="bg-rose-100/50">
      <NavBar>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* login required */}
          <Route path="/profile" element={<MyProfile />} />

          {/* user only */}
          <Route path="/purchase/:id" element={<Purchase />} />
          {/* admin only */}


          <Route path="/*" element={<NotFound />} />
        </Routes>
      </NavBar>
    </div>
  );
}

export default App;