import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import GptChating from "./pages/GptChating";
import GptChatingOption from "./pages/GptChatingOption";
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
        path: "/Chating",
        element: <div className="w-screen h-screen"><GptChating/>,</div>
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
        element: <GptChatingOption/>,
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
