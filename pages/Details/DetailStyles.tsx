import {Platform, StyleSheet} from 'react-native';

const DetailStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: 10,
    position: 'absolute',
  },
  saveButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderRadius: 25,
    borderColor: 'green',
    borderWidth: 1,
    margin: 10,
    backgroundColor: 'green',
  },
  shareButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderRadius: 25,
    borderColor: 'green',
    borderWidth: 1,
    margin: 10,
    backgroundColor: 'white',
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderRadius: 10,
    borderColor: 'green',
    borderWidth: 1,
    margin: 10,
    backgroundColor: 'green',
  },

  image: {
    height: 250,
    width: 350,
    margin: 10,
    alignSelf: 'center',
  },
  shareText: {
    color: 'green',
    fontSize: 15,
  },
  saveText: {
    color: 'white',
    fontSize: 15,
  },
});

export default DetailStyles;
