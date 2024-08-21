import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import NewsPopular from './components/NewsPopular';
import Rekom from './components/Rekom';
import Offer from './components/Offer';
import Footer from './components/Footer';
import { newsLoader } from './loaders/newsLoader';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <>
            <HeroSection />
            <NewsPopular />
            <Rekom/>
            <Offer/>
          </>
        ),
        loader: newsLoader,
      },
      // Add more routes here if needed
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
