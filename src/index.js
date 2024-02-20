import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Rockbita } from './components/Rockbita';
import { Random } from './components/Random';
import { Duality } from './components/Duality';
import { Layout } from './pages/Layout';
import { BandInfo } from './pages/BandInfo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />
  },
  {
    path: '/rockbita',
    element: <BandInfo title={'Rockbita'} description={<Rockbita />}  />
  },
  {
    path: '/random-shift',
    element: <BandInfo title={'Random Shift'} description={<Random />} />
  },
  {
    path: '/duality',
    element: <BandInfo title={'Duality'} description={<Duality />} />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

