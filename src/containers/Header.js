import React from 'react';
import PropTypes from 'prop-types';
import { getFiles } from '../selectors/headerSelectors';
import { addFile, deleteTabs } from '../actions/headerActions';
import Form from '../components/form/Form';
import Tabs from '../components/tabs/Tabs';
import { switchTabs } from '../actions/documentActions';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.css';

export default function Header() {

  const dispatch = useDispatch();
  const deleteTab = title => dispatch(deleteTabs(title));
  const changeTabs = title => dispatch(switchTabs(title));
  const handleSubmit = title => dispatch(addFile(title));

  const tabs = useSelector(state => getFiles(state));

  return (
    <div className={styles.Header}>
      <h1>Markdown Editor</h1>
      <Form handleSubmit={handleSubmit} />
      <Tabs tabs={tabs} changeTabs={changeTabs} deleteTab={deleteTab} />
    </div>
  );
}

Header.propTypes = {
  tabs: PropTypes.array,
  handleClick: PropTypes.func,
  title: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  markdown: PropTypes.string,
  changeTabs: PropTypes.func,
  deleteTab: PropTypes.func
};

