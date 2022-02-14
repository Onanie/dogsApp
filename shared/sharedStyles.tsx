import {StyleSheet} from 'react-native';

const sharedStyles = StyleSheet.create({
  Headercontainer: {
    flex: 1,
    marginTop: 10,
  },
  HeaderbuttonContainer: {
    margin: 10,
  },
  HeaderbuttonRowContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  HeaderbuttonRow: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  header: {
    flex: 0,
    backgroundColor: 'white',
    padding: 10,
    height: 125,
    borderBottomColor: 'green',
    borderBottomWidth: 0.5,
  },
  headerTop: {
    flexDirection: 'row',
  },
  headerCenter: {
    flexDirection: 'row',
    right: 0,
    justifyContent: 'center',
    alignContent: 'center',
  },
  headerTitle: {
    top: 10,
    fontSize: 21,
    color: 'green',
    fontWeight: 'bold',
    left: 110,
    margin: 5,
  },
  headerSubTitle: {
    top: 15,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  headerRight: {
    flex: 1,
    right: '0%',
    position: 'absolute',
  },
  subHeader: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  subHeaderLeft: {
    backgroundColor: 'yellow',
    padding: 5,
  },
  subHeaderCenter: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  subHeaderName: {
    color: 'white',
    marginLeft: 10,
  },
  searchBar: {
    marginTop: 15,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 0,
    flexDirection: 'row',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
  },
  searchIcon: {
    fontSize: 25,
    alignSelf: 'center',
    color: 'green',
    marginHorizontal: 15,
  },

  errorText: {
    color: '#fdca40',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '600',
  },

  centerText: {
    bottom: '45%',
    fontSize: 21,
    color: 'green',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  backIcon: {
    color: 'green',
    fontSize: 25,
    margin: 5,
    top: '10%',
  },
  detailsBar: {
    flexDirection: 'row',
    position: 'relative',
    top: 10,
    height: '10%',
    backgroundColor: 'white',
    borderBottomColor: 'green',
    borderBottomWidth: 0.5,
  },

  headerContainer: {
    flex: 0.9,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default sharedStyles;
