import "./App.css";
import { BrowserRouter } from "react-router";
import { Route, Routes } from "react-router";
import Main from "./components/Main";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            {/* <Route path="/" element={<Main />}></Route> */}
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Signup />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
