/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Button, Image, Center } from 'native-base';
import Title from '../src/component/Title';
import { getMyHistory } from '../src/redux/actions/history';
import { getBike, getCar, getMotor } from '../src/redux/actions/vehicle';
import { getProfile, getMyFavorite } from '../src/redux/actions/auth';
// import ImageThumb from '../src/assets/images/1.png';

const Home = ({ navigation }) => {
  let [page, setPage] = React.useState(1);
  const auth = useSelector(state => state.auth);
  const bike = useSelector(state => state.vehicle?.bike);
  const car = useSelector(state => state.vehicle?.car);
  const motor = useSelector(state => state.vehicle?.motor);
  // let urlImg = {
  //   uri: bike.image,
  // };
  // console.log(urlImg);

  const dispatch = useDispatch();
  useEffect(() => {
    getProfiler();
  }, []);
  const getProfiler = () => {
    dispatch(getMyHistory(auth.token, page));
    dispatch(getProfile(auth.token));
    dispatch(getMyFavorite(auth.token));
    dispatch(getBike());
    dispatch(getCar());
    dispatch(getMotor());
  };
  const renderBike = ({ item }) => {
    let urlImg = {
      uri: item?.image,
    };
    // console.log(urlImg);
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Reservation', {
            vehicleId: item.vehicleId,
            eventId: null,
          })
        }
        style={styles.coverImg}>
        <Image
          width={'100%'}
          height="180"
          alt={'image'}
          source={urlImg}
          style={styles.listImg}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={styles.scroll}>
        <View>
          <Center>
            <Image
              alt="bg"
              source={require('../src/assets/images/header.png')}
              style={styles.headerImg}
            />
            {auth.userData?.role === 'admin' && (
              <Button
                onPress={() => navigation.navigate('CreateVehicle')}
                w="80%"
                style={styles.addItem}>
                <Text style={styles.textAdd}>Add New Item</Text>
              </Button>
            )}
          </Center>
        </View>
        <View style={styles.content}>
          <View style={styles.box}>
            <Title child={'Recommended'} resChild={'View more'} />
            <FlatList
              data={motor}
              renderItem={renderBike}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.box}>
            <Title child={'Hot Deals'} resChild={'View more'} />
            <FlatList
              data={bike}
              renderItem={renderBike}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.box}>
            <Title
              onPress={() =>
                navigation.navigate('Cars', { screen: 'Vehicles' })
              }
              child={'Cars'}
              resChild={'View more'}
            />
            <FlatList
              data={car}
              renderItem={renderBike}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.box}>
            <Title
              onPress={() =>
                navigation.navigate('Bike', { screen: 'Vehicles' })
              }
              child={'Bike'}
              resChild={'View more'}
            />
            <FlatList
              data={bike}
              renderItem={renderBike}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.box}>
            <Title
              onPress={() =>
                navigation.navigate('Motorbike', { screen: 'Vehicles' })
              }
              child={'Motorbike'}
              resChild={'View more'}
            />
            <FlatList
              data={motor}
              renderItem={renderBike}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: 65,
  },
  box: {
    margin: 10,
    paddingRight: 15,
    backgroundColor: '#F7F5F2',
    borderRadius: 30,
    elevation: 3,
  },
  screen: {
    position: 'relative',
    height: '100%',
    backgroundColor: '#DFDFDE',
  },
  textAdd: {
    fontSize: 30,
    padding: 5,
  },
  addItem: {
    backgroundColor: '#DFDFDE',
    position: 'absolute',
    borderRadius: 20,
  },
  headerImg: {
    width: '100%',
    position: 'relative',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  coverImg: {
    width: 300,
    marginRight: 20,
  },
  listImg: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
    margin: 20,
  },
});

export default Home;
