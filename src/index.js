import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './index.css';
import App from './App';
import Films from './pages/Films';
import FilmsList from './components/FilmsList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/films" element={<Films />} />
        <Route path="/films/:id" element={<FilmsList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  ,
);