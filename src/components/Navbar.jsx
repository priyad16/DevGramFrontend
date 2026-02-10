import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../utils/userslice";
import { removeFeed } from "../utils/feedslice";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Logo from "./Logo";

function Navbar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        "/auth/logout", {},
        {
          withCredentials: true
        }
      )
      dispatch(removeUser());
      dispatch(removeFeed());
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="navbar bg-base-100 shadow-md px-4 sm:px-8">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-2xl font-bold text-primary tracking-wide hover:bg-transparent gap-2">
          <Logo className="w-8 h-8 text-primary" />
          DevGram
        </Link>
      </div>

      {user ? (
        <div className="flex-none gap-4">
          <span className="hidden sm:inline-block font-medium text-base-content/80">
            Hello, <span className="text-primary font-semibold">{user.firstName}</span>
          </span>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar ring-primary ring-offset-base-100 ring-offset-2 hover:ring-2 transition-all"
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
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg border border-base-200"
            >
              <li className="menu-title px-4 py-2 text-xs font-semibold text-base-content/50 uppercase tracking-wider">
                Account
              </li>
              <li>
                <Link to="./profile" className="justify-between">
                  Profile
                  <span className="badge badge-sm badge-primary">New</span>
                </Link>
              </li>
              <li><Link to="/connections">Connections</Link></li>
              <li><Link to="/friendreq">Friend Requests</Link></li>

              <div className="divider my-1"></div>

              <li><a>Settings</a></li>
              <li><button onClick={handleLogout} className="text-error font-medium hover:bg-error/10">Logout</button></li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex gap-2">
          <Link to="/login" className="btn btn-ghost btn-sm text-primary">Login</Link>
          <Link to="/signup" className="btn btn-primary btn-sm text-white shadow-md hover:shadow-lg">Sign Up</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
