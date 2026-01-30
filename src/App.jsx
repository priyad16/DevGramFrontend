import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import EditProfile from "./components/EditProfile"
import Connections from "./components/Connections"
import FriendRequests from "./components/FriendRequests"
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
            <Route path="/feed" element={<Feed />}></Route>
            <Route path="/editprofile" element={<EditProfile />}></Route>
             <Route path="/connections" element={<Connections />}></Route>
             <Route path="/friendreq" element={<FriendRequests />}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
