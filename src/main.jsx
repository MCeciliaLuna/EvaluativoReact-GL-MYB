import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from './routes/Login';
import AdminPage from './routes/AdminPage'
import SecondAdminPage from './routes/SecondAdminPage'
import ErrorPage from "./error-page";
import ChatRoom from "./routes/ChatRoom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (  
        <Login />
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/adminpage",
    element: <AdminPage />,
  },
  {
    path: "/secondadminpage",
    element: <SecondAdminPage />,
  },
  {
    path: "/chatroom",
    element: (
        <ChatRoom />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);