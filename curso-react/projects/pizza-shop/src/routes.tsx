import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/app/dashboard";
import { Signin } from "./pages/auth/sign-in";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { SignUp } from "./pages/auth/sign-up";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/", element: <Dashboard /> }],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/sign-in", element: <Signin /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
]);
