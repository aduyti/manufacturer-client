import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import 'react-toastify/dist/ReactToastify.css';

import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import AllProducts from "./Pages/AllProducts";
import NotFound from "./Pages/NotFound";
import Portfolio from "./Pages/Portfolio";
import MyProfile from "./Pages/MyProfile";
import Purchase from "./Pages/Purchase";
import MyOrders from "./Pages/MyOrders";
import Payment from "./Pages/Payment";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";


function App() {
  return (
    <div className="bg-rose-100/50">
      <NavBar>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* login required */}
          <Route path="/profile" element={<MyProfile />} />

          {/* user only */}
          <Route path="/purchase/:id" element={<Purchase />} />
          <Route path="/myorder" element={<MyOrders />} />
          <Route path="/order/:id" element={<Payment />} />
          {/* admin only */}


          <Route path="/*" element={<NotFound />} />
        </Routes>
      </NavBar>
    </div>
  );
}

export default App;