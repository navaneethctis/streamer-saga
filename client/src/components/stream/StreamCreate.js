import React from 'react';
import { connect } from 'react-redux';

import StreamForm from './StreamForm';

import { createStream } from '../../actions';

const StreamCreate = ({ createStream }) => (
  <div className='columns'>
    <div className='column is-three-fifths'>
      <h2 className='title'>Create Stream</h2>
      <StreamForm submitHandler={createStream} />
    </div>
  </div>
);

export default connect(null, { createStream })(StreamCreate);
