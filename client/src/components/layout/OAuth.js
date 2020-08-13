import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../../actions';

const OAuth = ({ isSignedIn, signIn, signOut }) => {
  const [auth2, setAuth2] = useState(null);

  useEffect(() => {
    window.gapi.load('client:auth2', () =>
      window.gapi.client
        .init({
          clientId:
            '280213648985-6sfs7uiqcbfid3mbbm9dm1itb9ne6110.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => setAuth2(window.gapi.auth2.getAuthInstance()))
    );
  }, []);

  useEffect(() => {
    const handleSignInChange = value =>
      value ? signIn(auth2.currentUser.get().getId()) : signOut();

    if (auth2) {
      handleSignInChange(auth2.isSignedIn.get());

      auth2.isSignedIn.listen(handleSignInChange);
    }

    // eslint-disable-next-line
  }, [auth2]);

  if (isSignedIn === null)
    return <button className='button is-link is-outlined is-loading'></button>;
  else if (isSignedIn)
    return (
      <button
        className='button is-link is-outlined'
        key='sign-out'
        onClick={auth2.signOut}
        style={{ width: '116px' }}
      >
        <span className='icon'>
          <i className='fab fa-google' />
        </span>
        <span>Sign Out</span>
      </button>
    );
  else
    return (
      <button
        className='button is-link is-outlined'
        key='sign-in'
        onClick={auth2.signIn}
        style={{ width: '116px' }}
      >
        <span className='icon'>
          <i className='fab fa-google' />
        </span>
        <span>Sign In</span>
      </button>
    );
};

const mapStateToProps = state => ({
  isSignedIn: state.authentication.isSignedIn
});

export default connect(mapStateToProps, { signIn, signOut })(OAuth);
