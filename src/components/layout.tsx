import MobileMenu from "./mobileMenu";
import Sidebar from "./siderbar";
import { Outlet } from "react-router-dom";


export default function Layout(){
    return(
        <div className="flex flex-col sm:flex-row bg-[#FAFAFB] min-w-[95vw]">
            <MobileMenu/>
            <Sidebar/>
            <Outlet/>
        </div>
    )
}