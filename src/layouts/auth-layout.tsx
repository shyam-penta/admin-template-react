import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="auth__layout d-flex flex-wrap justify-content-center align-items-center">
      <div className="layout-section">
        <div className="auth-header d-flex justify-content-center">
          <img src="/img/react.svg" alt="site-logo" />
        </div>
        <div className="auth_body">
          <Outlet />
        </div>
      </div>
    </div>
  )
}