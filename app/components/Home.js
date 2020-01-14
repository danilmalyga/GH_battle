import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Start the battle</h1>
      <Link className="button" to="/battle">
        {' '}
        Battle{' '}
      </Link>
    </div>
  );
}
