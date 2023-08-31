import React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './styles/index.css';

import Main from './app/Components/Main/Main';
import About from './app/Components/About/About';
import Page404 from './app/Components/Page404/Page404';
import FicheLogement from './app/Components/AppartementsPage/FicheLogement';
import Header from './app/Components/General/Header/Header';
import Footer from './app/Components/General/Footer/Footer';

import data from "./content/data.json"

import reportWebVitals from './reportWebVitals';

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="fiche-logement/:id" element={<FicheLogement />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();