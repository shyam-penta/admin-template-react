import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@store/index";
import { SignIn } from "@core/constants/app-routes";
import type { PropsWithChildren } from "react";


const ProtectedGuard = ({ children }: PropsWithChildren) => {
  // const { socketService, socketConnected } = useSocket();

  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={SignIn} replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedGuard;
