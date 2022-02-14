import {combineReducers} from 'redux';
import searchTerm from './searchTerm';
import setDog from './SelectedDog';

export default combineReducers({
  selectedDog: setDog,
  searchText: searchTerm,
});
