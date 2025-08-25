import type { RootState } from "@store/index";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  const { authPageTitle } = useSelector((state: RootState) => state.common);

  return (
    <div className="auth__layout d-flex flex-wrap justify-content-center align-items-center">
      <div className="layout-section">
        <div className="auth_body">
          <div className="auth__header text-center mb-2">
            <img src="/img/react.svg" alt="site-logo" className="mb-2" />
            <h5 className="text-center d-block">{authPageTitle}</h5>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}