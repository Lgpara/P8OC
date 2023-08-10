import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

//styles 
import "./styles/main.css"
import Main from "./app/Components/Main/Main"
import About from "./app/Components/About/About";
import Page404 from "./app/Components/Page404/Page404";
import FicheLogement from "./app/Components/AppartementsPage/FicheLogement";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "fiche-logement/:id",
    element: <FicheLogement />,
  },
  {
    path:"*",
    element: <Page404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



reportWebVitals();
