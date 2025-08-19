import HeaderMenu from "@components/header";
import LeftMenu from "@components/left-menu";
import { Outlet } from "react-router-dom";


export default function ProtectedLayout() {
  return(
    <div className="pro__layout d-flex">
      <HeaderMenu />
      <div className="main__content">
        <LeftMenu />
        <div className="main__body">
          <Outlet />
        </div>
      </div>
    </div>
  )
}