import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './styles/main.css';
import Main from './app/Components/Main/Main';
import About from './app/Components/About/About';
import Page404 from './app/Components/Page404/Page404';
import FicheLogement from './app/Components/AppartementsPage/FicheLogement';
import Header from './app/Components/General/Header/Header';
import Footer from './app/Components/General/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="fiche-logement/:id" element={<FicheLogement />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();