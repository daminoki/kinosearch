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
import Film from './pages/Film';
import SvgList from './components/SvgList';
import Profile from './pages/Profile';
import MyMovies from './pages/MyMovies';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/my-movies" element={<MyMovies />} />
        <Route path="/films" element={<Films />} />
        <Route path="/films/:id" element={<FilmsList />} />
        <Route path="/catalog/:id" element={<Film />} />
      </Routes>
    </BrowserRouter>
    <SvgList />
  </React.StrictMode>
  ,
);