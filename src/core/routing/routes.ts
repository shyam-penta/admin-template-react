export const ROUTES = {
  HOME: "",
  AUTH: {
    SIGN_IN: "/auth/sign-in",
    SIGN_UP: "/auth/sign-up",
    FORGOT_PASS: "/auth/forgot-password",
    RESET_PASS: "/auth/reset-password",
    FORCE_UPDATE_PASS: "/auth/update-password",
  },
  PROTECTED: {
    DASHBOARD: "/dashboard",
    USER_MANAGEMENT: "/user-management",
    PROFILE: `/my-profile`,
    TASK: `/task-management`,
    ROLE: {
      LIST: `/role-management`
    },
    PROJECT: {
      LIST: `/project-management`
    }
  },
  NOT_FOUND: "/404",
  ERROR_500: "/500",
  ANY_PATH: "*"
}