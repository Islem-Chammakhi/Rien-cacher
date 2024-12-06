import React from 'react'
import Head from './components/Head';
import Loader from './components/Loader';
const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
        <Head />
        <Loader />
      </div>);
  
}

export default HomePage
