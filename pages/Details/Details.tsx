import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import DetailStyles from './DetailStyles';
import Share from 'react-native-share';
import Header from '../../shared/NavBar';
import * as helpers from '../../Helpers/Helper';
const Details = ({currentDog, navigation}: any) => {
  const handleSaveImage = () => {
    helpers.checkPermission(currentDog);
  };
  const handleShareImage = async () => {
    let options = {
      title: 'share',
      message: 'message',
      url: currentDog,
    };
    try {
      await Share.open(options);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={DetailStyles.container}>
      <Header navigation={navigation} />
      <Image source={{uri: currentDog}} style={DetailStyles.image} />
      <View style={DetailStyles.buttonsContainer}>
        <TouchableOpacity
          onPress={handleSaveImage}
          style={DetailStyles.saveButton}>
          <Text style={DetailStyles.saveText}>SAVE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleShareImage}
          style={DetailStyles.shareButton}>
          <Text style={DetailStyles.shareText}>SHARE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const mapStateToProps = (state: any) => {
  return {
    currentDog: state.selectedDog,
  };
};

export default connect(mapStateToProps)(Details);
