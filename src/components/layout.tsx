import Sidebar from "./siderbar";
import { Outlet } from "react-router-dom";


export default function Layout(){
    return(
        <div className="flex flex-row">
            <Sidebar/>
            <Outlet/>
        </div>
    )
}