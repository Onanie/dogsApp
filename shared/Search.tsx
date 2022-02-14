import React from 'react';
import {View, TextInput} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {setSearch} from '../redux/actions/Index';
import sharedStyles from './sharedStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = () => {
  const dispatch = useDispatch();
  return (
    <View style={sharedStyles.searchBar}>
      <Icon name="search" style={sharedStyles.searchIcon} />
      <TextInput
        style={sharedStyles.searchInput}
        placeholder="  Search..."
        onChangeText={text => dispatch(setSearch(text))}
      />
    </View>
  );
};
const mapStateToProps = (state: any) => {
  return {
    searchText: state.text,
  };
};

export default connect(mapStateToProps, setSearch)(Search);
