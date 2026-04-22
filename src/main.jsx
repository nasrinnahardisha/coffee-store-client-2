import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainLayouts from "./Components/layouts/MainLayouts.jsx";
import Home from "./Components/Home.jsx";
import AddCoffee from "./Components/AddCoffee.jsx";
import CoffeeDetails from "./Components/CoffeeDetails.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import SignUp from "./Components/SignUp.jsx";
import SignIn from "./Components/SignIn.jsx";
import AuthProvider from "./Components/Contexts/AuthProvider.jsx";
import Users from "./Components/Users.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        loader: () => fetch("https://coffee-store-server-2-jxtc.vercel.app/coffees"),
        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: "/coffee/:id",
        loader: ({ params }) =>
          fetch(`https://coffee-store-server-2-jxtc.vercel.app/coffees/${params.id}`),
        Component: CoffeeDetails,
      },
      {
        path: "/updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`https://coffee-store-server-2-jxtc.vercel.app/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "signin",
        Component: SignIn,
      },
       {
        path: "*",
        Component: NotFound,
      },
      {
        path: "users",
        loader: () => fetch("https://coffee-store-server-2-jxtc.vercel.app/"),
        Component: Users,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />,
    </AuthProvider>
  </StrictMode>,
);
