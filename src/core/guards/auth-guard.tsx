// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux"; // or context
// import { ROUTES } from "@core/constants/routes"; // your route constants
// import { RootState } from "@store/index";
// import { useSocket } from "@core/provider/SocketProvider";

// const AuthGuard = ({ children }) => {
//   const { socketService, socketConnected } = useSocket();
//   const { isAuthenticated } = useSelector((state: RootState) => state.auth); // modify per your store
//   if (isAuthenticated) {
//     return <Navigate to={ROUTES.PROTECTED.DASHBOARD} replace />;
//   }
//   if (socketConnected) {
//     socketService.closeSocketClient()
//   }
//   return children;
// };

// export default AuthGuard;
