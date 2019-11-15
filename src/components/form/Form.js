import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ handleSubmit }) => {
  const [title, setTile] = useState('');

  const handleChange = ({ target }) => {
    setTile(target.value);
  };

  const handleCreateFile = event => {
    event.preventDefault();
    handleSubmit(title);
  };

  return (
    <form className={styles.Form} onSubmit={handleCreateFile}>
      <input type="text" name="title" value={title} onChange={handleChange} placeholder="New file name"></input>
      <button>Create File</button>
    </form>
  );
};

Form.propTypes = {
  title: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func
};

export default Form;
