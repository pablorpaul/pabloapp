import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "./NavBar";


export default function Body(){
    return(
        <div className="container py-3">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    )
}