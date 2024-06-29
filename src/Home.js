import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div>
        <Helmet>
            <title>Home - Ryan Laidlaw</title>
        </Helmet>
        <h1>Home</h1>
    </div>
  );
}

export default Home;
