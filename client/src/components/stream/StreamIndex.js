import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { readStreams } from '../../actions';

const StreamIndex = ({ readStreams, isSignedIn, streams, userId }) => {
  useEffect(() => {
    readStreams();

    // eslint-disable-next-line
  }, []);

  return (
    <div className='columns'>
      <div className='column is-three-fifths'>
        <div
          className='is-flex mb-5'
          style={{ alignItems: 'flex-end', justifyContent: 'space-between' }}
        >
          <h2 className='title mb-0'>Streams</h2>
          {isSignedIn ? (
            <Link className='button is-link is-outlined' to='/create'>
              <span className='icon'>
                <i className='fas fa-plus-circle' />
              </span>
              <span>Create Stream</span>
            </Link>
          ) : (
            <button className='button is-invisible'></button>
          )}
        </div>
        {streams.map(stream => (
          <div
            className='box is-flex'
            key={stream.id}
            style={{ alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div className='is-flex' style={{ alignItems: 'center' }}>
              <span className='icon is-small has-text-info mr-2'>
                <i className='fas fa-play-circle' />
              </span>
              <h3 className='subtitle mb-0'>{stream.title}</h3>
            </div>
            <div>
              <Link className='button is-info is-inverted' to={`/${stream.id}`}>
                <span className='icon'>
                  <i className='fas fa-eye' />
                </span>
              </Link>
              {stream.userId === userId && (
                <>
                  <Link
                    className='button is-link is-inverted ml-1'
                    to={`/edit/${stream.id}`}
                  >
                    <span className='icon'>
                      <i className='fas fa-edit' />
                    </span>
                  </Link>
                  <Link
                    className='button is-danger is-inverted ml-1'
                    to={`/destroy/${stream.id}`}
                  >
                    <span className='icon'>
                      <i className='fas fa-minus-circle' />
                    </span>
                  </Link>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isSignedIn: state.authentication.isSignedIn,
  streams: Object.values(state.stream),
  userId: state.authentication.userId
});

export default connect(mapStateToProps, { readStreams })(StreamIndex);
