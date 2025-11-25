import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";
function Main(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Main;
