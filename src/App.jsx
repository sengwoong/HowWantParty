import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Chating from "./components/Chating";
import TopRightNotification from "./components/CustomAlert/TopRightNotification";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import GptChating from "./pages/GptChating";
import GptChatingOptionMain from "./pages/GptChatOption/GptChatingOptionMain";
import Posters from "./pages/Posters";
import ErrorPage from "./pages/ErrorPage";
import Poster from "./pages/Poster";

const DashBoard = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <div className="fixed bottom-4 right-4 ">
        <Chating />
        <TopRightNotification />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Chating",
        element: <div className="w-screen h-screen"><GptChating /></div>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/ChatingGpt",
        element: <GptChatingOptionMain />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/poster/:id",
    element: <Poster />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
