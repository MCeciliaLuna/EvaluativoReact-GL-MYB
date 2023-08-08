import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainPage from "./routes/MainPage";
import UserPage from "./routes/UserPage";
import SecondAdminPage from "./routes/SecondAdminPage";
import ErrorPage from "./error-page";
import ChatRoom from "./routes/ChatRoom";
import { videos } from "../src/api/videosArray";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <UserPage videoData={videos} />,
  },
  {
    path: "/secondadminpage",
    element: <SecondAdminPage videoData={videos} />,
    children: [
      {
        path: ":category",
      },
    ],
  },
  {
    path: "/chatroom",
    element: <ChatRoom />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
