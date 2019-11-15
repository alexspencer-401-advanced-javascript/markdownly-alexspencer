import { UPDATE_MARKDOWN, CHANGE_TABS } from '../actions/documentActions';
import { ADD_FILE, DELETE_TAB } from '../actions/headerActions';

const initialState = {
  active: 'New File',
  files: { 'New File': '' }
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return { ...state, files: { ...state.files, [state.active]: action.payload } };
    case ADD_FILE:
      return { ...state, active: action.payload, files: { ...state.files, [action.payload]: '' } };
    case CHANGE_TABS:
      return { ...state, active: action.payload };
    case DELETE_TAB:
      if(state.active === action.payload) alert('You cannot delete the file your current file');
      else if(Object.keys(state.files).length > 1) delete state.files[action.payload];
      else alert('You cannot delete your last file!');
      return { ...state };
    default: 
      return state;
  }
}
