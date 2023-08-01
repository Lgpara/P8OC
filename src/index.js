import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

//Styles

import "./styles/main.css"
import "./styles/locations.css"

//

// Components

import Header from "./app/Header"
import Banner from "./app/Banner"
import Location from './app/Locations';
import Footer from './app/Footer';

import Error404 from './app/404';
import Carousel from './app/Carousel';
import Banner2 from './app/Banner2';

// Components
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Banner2 />
    <Carousel />
    <Error404 />
    <Banner />
    <Location />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
