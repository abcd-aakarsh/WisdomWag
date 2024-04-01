import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Course from "./components/Course";
import Footer from "./components/Footer";
import "../index.css";
import About from "./components/About";
import Home from "./components/Home";
import Community from "./components/Community";
import CoursePage from "./components/CoursePage";
import Cart from "./components/Cart";
import LoginSignup from "./components/LoginSignup";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ShopContextProvider from "./components/ShopContext";

const App = () => {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/course",
        element: <Course />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/course/:id",
        element: <CoursePage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <LoginSignup />,
      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ShopContextProvider><RouterProvider router={appRouter} /></ShopContextProvider>);

