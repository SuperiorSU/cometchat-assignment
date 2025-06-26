import { Outlet } from "react-router-dom";
import NavBar from "../components/global/NavBar";
import Footer from "../components/global/Footer";

const IndexLayout = ()=>{
    return(
        <div className="bg-[#0A0914] ">
            <NavBar/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default IndexLayout