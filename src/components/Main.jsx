import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import { addUser } from "../utils/userslice";
import { useSelector, useDispatch } from "react-redux";

function Main() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getUserData() {
      try {
        const res = await axios.get("api/profile/view", {
          withCredentials: true,
        });
        console.log(res);
        dispatch(addUser(res.data));
      } catch (err) {
        console.log(err);
      }
    }

    getUserData();
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Main;
