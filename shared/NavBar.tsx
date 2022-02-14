import React from 'react';
import {View, Text} from 'react-native';
import sharedStyles from './sharedStyles';
import Search from './Search';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  navigation?: any;
}
export default function Header({navigation}: Props) {
  return (
    <View style={sharedStyles.header}>
      <View style={sharedStyles.headerTop}>
        <View style={sharedStyles.headerCenter}>
          <Icon
            name="chevron-left"
            style={[
              sharedStyles.backIcon,
              {display: navigation ? 'flex' : 'none'},
            ]}
            onPress={() => navigation.goBack()}
          />
          <Text style={sharedStyles.headerTitle}>Dog App</Text>
        </View>
      </View>
      <Search />
    </View>
  );
}
