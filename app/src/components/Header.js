import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <h1>Pixel Photography</h1>
      <Link to='/'>
        <h3>Home</h3>
      </Link>
    </div>
  );
}
