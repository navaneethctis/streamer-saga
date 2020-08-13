import React from 'react';
import { Link } from 'react-router-dom';

import { OAuth } from './';

const Navbar = () => (
  <nav className='navbar has-background-white-bis'>
    <div className='container is-fluid'>
      <div className='navbar-brand'>
        <Link className='navbar-item' to='/'>
          <h1 className='title is-4'>Streamer</h1>
        </Link>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <Link className='button is-info is-outlined' to='/'>
              <span className='icon'>
                <i className='fas fa-stream' />
              </span>
              <span>Streams</span>
            </Link>
          </div>
          <div className='navbar-item'>
            <OAuth />
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
