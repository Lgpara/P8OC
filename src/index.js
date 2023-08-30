import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

//styles
import './styles/main.css';
import Main from './app/Components/Main/Main';
import About from './app/Components/About/About';
import Page404 from './app/Components/Page404/Page404';
import FicheLogement from './app/Components/AppartementsPage/FicheLogement';
import Header from './app/Components/General/Header/Header';
import Footer from './app/Components/General/Footer/Footer';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    ),
  },
  {
    path: 'about',
    element: (
      <div>
        <Header />
        <About />
        <Footer />
      </div>
    ),
  },
  {
    path: 'fiche-logement/:id',
    element: (
      <div>
        <Header />
        <FicheLogement />
        <Footer />
      </div>
    ),
    errorElement: (
      <div>
        <Header />
        <Page404 />
        <Footer />
      </div>
    ),
  },
  {
    path: '*',
    element: (
      <div>
        <Header />
        <Page404 />
        <Footer />
      </div>
    ),
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();