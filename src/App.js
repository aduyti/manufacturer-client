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
import Dashboard from "./Pages/Dashboard";
import ManageProducts from "./Pages/ManageProducts";
import ManageUser from "./Pages/ManageUser";
import ManageOrder from "./Pages/ManageOrder";
import AddReview from "./Pages/AddReview";
import AddProduct from "./Pages/AddProduct";
import RequireUser from "./Utilities/Auth/RequireUser";
import RequireLogin from "./Utilities/Auth/RequireLogin";
import Product from "./Pages/Product";


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
            <RequireUser acc="user"><Purchase /></RequireUser>
          </RequireLogin>} />

          <Route path="/dashboard" element={<RequireLogin><Dashboard /></RequireLogin>}>
            <Route index element={<MyProfile />} />
            <Route path="addreview" element={<RequireUser acc="user"><AddReview /></RequireUser>} />
            <Route path="myorders" element={<RequireUser acc="user"><MyOrders /></RequireUser>} />
            <Route path="order/:id" element={<RequireUser acc="user"><Payment /></RequireUser>} />

            <Route path="addproduct" element={<RequireUser acc="admin"><AddProduct /></RequireUser>} />
            <Route path="manageorders" element={<RequireUser acc="admin"><ManageOrder /></RequireUser>} />
            <Route path="manageproducts" element={<RequireUser acc="admin"><ManageProducts /></RequireUser>} />
            <Route path="manageproduct/:id" element={<RequireUser acc="admin"><Product /></RequireUser>} />
            <Route path="manageusers" element={<RequireUser acc="admin"><ManageUser /></RequireUser>} />

          </Route>


          <Route path="/*" element={<NotFound />} />
        </Routes>
      </NavBar>
    </div>
  );
}

export default App;