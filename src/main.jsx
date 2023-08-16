import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainPage from "./routes/MainPage";
import HomePage from "./routes/HomePage";
import SelectedCategoryPage from "./routes/SelectedCategoryPage";
import ErrorPage from "./error-page";
import ChatRoomPage from "./routes/ChatRoomPage";
import { videos } from "../src/api/videosArray";
import { DarkModeProvider } from "../src/context/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <HomePage videoData={videos} />,
  },
  {
    path: "/selectedcategory",
    children: [
      {
        path: ":category",
        element: <SelectedCategoryPage videoData={videos} />,
      },
    ],
  },
  {
    path: "/chatroom",
    element: <ChatRoomPage />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  </React.StrictMode>
);
