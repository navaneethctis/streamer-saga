import _ from 'lodash';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import StreamForm from './StreamForm';

import { updateStream, readStream } from '../../actions';

const StreamEdit = ({ updateStream, match, readStream, stream }) => {
  useEffect(() => {
    readStream(match.params.id);

    // eslint-disable-next-line
  }, [match.params.id]);

  if (!stream) return null;

  return (
    <div className='columns'>
      <div className='column is-three-fifths'>
        <h2 className='title'>Edit Stream</h2>
        <StreamForm
          initialValues={_.pick(stream, 'description', 'title')}
          submitHandler={updates => updateStream(stream.id, updates)}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state, { match }) => ({
  stream: state.stream[match.params.id]
});

export default connect(mapStateToProps, { updateStream, readStream })(
  StreamEdit
);
