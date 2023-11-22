import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Link,
} from "react-router-dom";
import Posters from "./pages/Posters";
import Chating from "./components/Chating";
import ErrorPage from "./pages/ErrorPage";
import Poster from "./pages/Poster";

const DashBoard = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    <div className="fixed bottom-4 right-4 ">
    <Chating />

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
        element: <Home/>,
      },
      {
        path: "/posters",
        element: <Posters />,
      },
    ],
  },
  {
    path: "/poster/:id",
    element: <Poster />,
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <ErrorPage />,
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
