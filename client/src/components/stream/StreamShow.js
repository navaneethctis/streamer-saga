import flv from 'flv.js';
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { readStream } from '../../actions';

const StreamShow = ({ match, readStream, stream }) => {
  useEffect(() => {
    readStream(match.params.id);

    // eslint-disable-next-line
  }, [match.params.id]);

  const videoRef = useRef();

  useEffect(() => {
    if (stream) {
      const videoPlayer = flv.createPlayer({
        type: 'flv',
        url: `http://localhost:8000/live/${match.params.id}.flv`
      });

      videoPlayer.attachMediaElement(videoRef.current);

      videoPlayer.load();

      return () => videoPlayer.destroy();
    }
  }, [match.params.id, stream]);

  if (!stream) return null;

  return (
    <div className='columns'>
      <div className='column is-three-fifths'>
        <video controls ref={videoRef} style={{ width: '100%' }} />
        <h2 className='title mt-5'>{stream.title}</h2>
        <p className='content'>{stream.description}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state, { match }) => ({
  stream: state.stream[match.params.id]
});

export default connect(mapStateToProps, { readStream })(StreamShow);
