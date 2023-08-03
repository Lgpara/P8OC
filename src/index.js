// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';

// //Styles

// import "./styles/locations.css"

// //

// // Components

// import Header from "./app/Header"
// import Banner from "./app/Banner"
// import Location from './app/Locations';
// import Footer from './app/Footer';


// import ContentApropos from './app/ContentApropos';
// import Error404 from './app/404';
// import Banner2 from './app/Banner2';
// import StarRating from './app/StarRating';

// // Components
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Header />
//     <ContentApropos />
//     <StarRating />
//     <Banner2 />
//     <Error404 />
//     <Banner />
//     <Location />
//     <Footer />
//   </React.StrictMode>
// );

// reportWebVitals();




import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

//styles 
import "./styles/main.css"
import Header from "./app/Header"
import Main from "./app/Main"
import About from "./app/About";
import Render from "./app/Render";


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
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



reportWebVitals();
