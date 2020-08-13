import React from 'react';
import { reduxForm, Field } from 'redux-form';

const renderInput = ({ input, label, meta: { error, touched } }) => (
  <div className='field'>
    <label className='label'>{label}</label>
    <div className='control'>
      <input
        {...input}
        autoComplete='off'
        className={`input${error && touched ? ' is-danger' : ''}`}
      />
      {error && touched && <p className='help is-danger'>{error}</p>}
    </div>
  </div>
);

const renderTextarea = ({ input, label, meta: { error, touched } }) => (
  <div className='field'>
    <label className='label'>{label}</label>
    <div className='control'>
      <textarea
        {...input}
        autoComplete='off'
        className={`textarea${error && touched ? ' is-danger' : ''}`}
      />
      {error && touched && <p className='help is-danger'>{error}</p>}
    </div>
  </div>
);

const StreamForm = ({ submitHandler, handleSubmit }) => (
  <form onSubmit={handleSubmit(submitHandler)}>
    <Field component={renderInput} label='Title' name='title' />
    <Field component={renderTextarea} label='Description' name='description' />
    <div className='field'>
      <div className='control'>
        <button className='button is-link is-outlined'>
          <span className='icon'>
            <i className='fas fa-check-circle' />
          </span>
          <span>Submit</span>
        </button>
      </div>
    </div>
  </form>
);

const validate = values => {
  const errors = {};

  if (!values.title) errors.title = 'The title is required';

  if (!values.description) errors.description = 'The description is required';

  return errors;
};

export default reduxForm({ form: 'streamForm', validate })(StreamForm);
