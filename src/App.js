import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <NavBar>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </NavBar>
    </div>
  );
}

export default App;