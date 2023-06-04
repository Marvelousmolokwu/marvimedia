import Home from "./Pages/home";
import Profile from "./Pages/profile/Profile";
import Login from "./Pages/login/login";
import Register from "./Pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>

          <Route path="/login" element={<Login />}></Route>

          <Route path="/" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
