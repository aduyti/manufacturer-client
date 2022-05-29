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
import ManageProducts from "./Pages/ManageProducts";
import ManageUser from "./Pages/ManageUser";
import ManageOrder from "./Pages/ManageOrder";
import AddReview from "./Pages/AddReview";
import AddProduct from "./Pages/AddProduct";
import RequireUser from "./Utilities/Auth/RequireUser";
import RequireAdmin from "./Utilities/Auth/RequireAdmin";
import RequireLogin from "./Utilities/Auth/RequireLogin";


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

          <Route path="/purchase/:id" element={<RequireLogin>
            <RequireUser><Purchase /></RequireUser>
          </RequireLogin>} />
          <Route path="/myorder" element={<RequireUser><MyOrders /></RequireUser>} />
          <Route path="/order/:id" element={<RequireUser><Payment /></RequireUser>} />

          <Route path="/addreview" element={<RequireLogin><AddReview /></RequireLogin>} />
          <Route path="/profile" element={<RequireLogin><MyProfile /></RequireLogin>} />

          <Route path="/products" element={<RequireAdmin><ManageProducts /></RequireAdmin>} />
          <Route path="/products" element={<RequireAdmin><ManageOrder /></RequireAdmin>} />
          <Route path="/products" element={<RequireAdmin><ManageUser /></RequireAdmin>} />
          <Route path="/products" element={<RequireAdmin><AddProduct /></RequireAdmin>} />


          <Route path="/*" element={<NotFound />} />
        </Routes>
      </NavBar>
    </div>
  );
}

export default App;