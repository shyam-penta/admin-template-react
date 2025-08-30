import { AuthGuard, ProtectedGuard } from "@core/guards";
import { AuthLayout, ChildrenWarperLayout, Dashboard, ProtectedLayout, SignIn } from "./route-pages";
import { SignUp } from "@core/constants/app-routes";

export const APP_ROUTES = [
  {
    path: "auth",
    component: AuthLayout,
    children: [
      {
        path: "",
        guard: AuthGuard,
        component: ChildrenWarperLayout,
        children: [
          { path: "sign-in", component: SignIn },
          { path: "sign-up", component: SignUp },
          // { path: "forgot-password", component: ForgotPasswod },
          // { path: "reset-password", component: ResetPassword },
          { path: "", redirectTo: "sign-in" }
        ]
      }
    ]
  },
  {
    path: "",
    component: ProtectedLayout,
    guard: ProtectedGuard,
    children: [
      { path: "dashboard", component: Dashboard },
      { path: "", redirectTo: "dashboard" }
    ]
  },
  // { path: "*", component: NotFound }  // catch-all redirect
];