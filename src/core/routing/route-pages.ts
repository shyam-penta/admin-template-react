import React from "react";

// Loading Layouts
export const AuthLayout = React.lazy(() => import("@layouts/auth-layout"));
export const ProtectedLayout = React.lazy(() => import("@layouts/protected-layout"));
export const ChildrenWarperLayout = React.lazy(() => import("@layouts/ChildrenWarperLayout"));

// Loading Auth Pages
export const SignIn = React.lazy(() => import("@pages/auth/sign-in"));

// Loading Protected Pages
export const Dashboard = React.lazy(() => import("@pages/protected/dashboard"));
