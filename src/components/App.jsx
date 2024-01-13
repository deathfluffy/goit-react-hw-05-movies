import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import { Layout } from 'components/Layout/Layout';
import { Loader }  from './Loader/Loader';
import css from './App.module.css'

const Home = lazy(() => import('pages/HomePage/Home'))
const MoviesDetails = lazy(() => import('pages/MoviesDetails/MoviesDetails'))
const Movies = lazy(() => import('pages/Movies/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));


export const App = () => {
  return (
  <div>
   <Layout>
     <Suspense fallback={<Loader className={css.loader}  />}>
      <Routes>    
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Suspense>
   </Layout>
  </div>
  );
};

