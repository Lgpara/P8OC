import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

//styles 
import "./styles/main.css"
import Main from "./app/Main"
import About from "./app/About";
import Render from "./app/Render";
import FicheLogement from "./app/FicheLogement";
import data from "./content/data.json"



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
    path: "render",
    element: <Render />,
  },
  {
    path: "fiche-logement",
    element: <FicheLogement />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



reportWebVitals();
