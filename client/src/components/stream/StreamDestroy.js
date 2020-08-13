import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Modal } from '../layout';

import { deleteStream, readStream } from '../../actions';

const StreamDestroy = ({ deleteStream, match, readStream, stream }) => {
  useEffect(() => {
    readStream(match.params.id);

    // eslint-disable-next-line
  }, [match.params.id]);

  return (
    <Modal
      content={
        stream
          ? `Are you sure you want to delete <span class="bold">${stream.title}</span>?`
          : null
      }
      handleSubmit={() => deleteStream(match.params.id)}
      title='Delete Stream'
    />
  );
};

const mapStateToProps = (state, { match }) => ({
  stream: state.stream[match.params.id]
});

export default connect(mapStateToProps, { deleteStream, readStream })(
  StreamDestroy
);
