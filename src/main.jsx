import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import{createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register.jsx";
import ErrorPage from "./Pages/404.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Assalamualaikum, Dekk..</div>,
    errorElement: <ErrorPage/>
  },
  {
    path: "Login",
    element: <LoginPage />
  },
  {
    path: "Register",
    element: <RegisterPage />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
