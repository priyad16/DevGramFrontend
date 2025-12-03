import { useSelector } from "react-redux";
import {removeUser} from "../utils/userslice";
import { removeFeed } from "../utils/feedslice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import axios from "axios";
function Navbar() {
  const user = useSelector((state) => state.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleLogout=async()=>{
    try{
    await axios.post(
      "http://localhost:3000/auth/logout",{},
      {
        withCredentials:true
      }
    )
    dispatch(removeUser());
    dispatch(removeFeed());
    navigate('/login');
  } catch(err){
    console.log(err);
  }
  }
  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
       <Link to="/"> <a className="btn btn-ghost text-xl">DevGram</a></Link>
      </div>

      {user && (
  <div className="flex-none flex items-center gap-3 mr-5">

    <span className="font-medium text-base">
      Hello, {user.firstName}
    </span>

    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="profile"
            src={
              user.avatar ||
              "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            }
          />
        </div>
      </div>

      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
      >
        <li>
          <Link to={'./profile'}>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li onClick={handleLogout}><a>Logout</a></li>
        <Link to="/connections"><li ><a>Connections</a></li></Link>
        <Link to="/friendreq"><li ><a>Friend Requests</a></li></Link>

      </ul>
    </div>
  </div>
)}

    </div>
  );
}

export default Navbar;
