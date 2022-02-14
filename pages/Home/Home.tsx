import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  Image,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect, useDispatch} from 'react-redux';
import {selectDog} from '../../redux/actions/Index';
import Header from '../../shared/NavBar';
import HomeStyles from './HomeStyles';

const Home = ({navigation}: any) => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState<any>([]);
  const [isListEnd, setIsListEnd] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    if (!loading && !isListEnd) {
      setLoading(true);
      fetch('https://dog.ceo/api/breed/hound/images/random/21')
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.message.length > 0) {
            setDataSource([...dataSource, ...responseJson.message]);
            setLoading(false);
          } else {
            setIsListEnd(true);
            setLoading(false);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  const handleSelectDog = (dog: any) => {
    dispatch(selectDog(dog));
    navigation.navigate('Deails');
  };

  const renderFooter = () => {
    return (
      <View>
        {loading ? (
          <ActivityIndicator color="black" style={{margin: 15}} />
        ) : null}
      </View>
    );
  };

  const ItemView = ({item}: any) => {
    return (
      <View style={HomeStyles.container}>
        <TouchableOpacity onPress={() => handleSelectDog(item)}>
          <Image source={{uri: item}} style={HomeStyles.image} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{}}>
      <Header />
      <FlatList
        data={dataSource}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ItemView}
        ListFooterComponent={renderFooter}
        onEndReached={getData}
        onEndReachedThreshold={0.5}
        numColumns={3}
      />
    </SafeAreaView>
  );
};
const mapStateToProps = (state: any) => {
  return {
    texy: state.searchText,
  };
};

export default connect(mapStateToProps, selectDog)(Home);
