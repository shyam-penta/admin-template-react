import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Dashboard } from "@core/constants/app-routes";
import type { RootState } from "@store/index";
import type { PropsWithChildren } from "react";

const AuthGuard = ({ children }: PropsWithChildren) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth); // modify per your store
  if (isAuthenticated) {
    return <Navigate to={Dashboard} replace />;
  }
  return children;
};

export default AuthGuard;
