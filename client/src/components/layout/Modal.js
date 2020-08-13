import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import history from '../../history';

const Modal = ({ content, handleSubmit, title }) =>
  ReactDOM.createPortal(
    <div className='modal is-active'>
      <div className='modal-background' onClick={() => history.go('/')}></div>
      <div className='modal-content' onClick={event => event.stopPropagation()}>
        <div className='box'>
          <h2 className='title'>{title}</h2>
          <p
            className='content'
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <button className='button is-link is-outlined' onClick={handleSubmit}>
            <span className='icon'>
              <i className='fas fa-check-circle' />
            </span>
            <span>Yes</span>
          </button>
          <Link className='button is-info is-outlined ml-5' to='/'>
            <span className='icon'>
              <i className='fas fa-times-circle' />
            </span>
            <span>No</span>
          </Link>
        </div>
        <button aria-label='close' className='modal-close is-large'></button>
      </div>
    </div>,
    document.getElementById('modal')
  );

export default Modal;
