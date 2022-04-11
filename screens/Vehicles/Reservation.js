/* eslint-disable react-hooks/exhaustive-deps */
import http from '../../src/helpers/http';
import qs from 'qs';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Input, Image, Select, Center, Box, Button } from 'native-base';
import DatePicker from 'react-native-date-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import FAicon from 'react-native-vector-icons/FontAwesome';
import ADicon from 'react-native-vector-icons/AntDesign';
import IONicon from 'react-native-vector-icons/Ionicons';
import { getFavoriteId } from '../../src/redux/actions/auth';
import { getDetailVehicle } from '../../src/redux/actions/vehicle';
import { useDispatch, useSelector } from 'react-redux';
import { orderCount } from '../../src/redux/actions/transaction';

const Reservation = ({ route, navigation, navigation: { goBack } }) => {
  const [favoriteReady, setFavoriteReady] = useState();
  // console.log('---------------' + favoriteReady);
  const [idFavorite, setIdFavorite] = useState();
  const [favorite, setFavorite] = useState(false);
  const [count, setCount] = useState(1);
  const token = useSelector(state => state.auth?.token);
  const user = useSelector(state => state.auth.userData);
  const fav = useSelector(state => state.auth?.favoriteId);
  // console.log(fav);
  const vehicles = useSelector(state => state.vehicle?.detailVehicle);
  const { vehicleId } = route.params;
  const [date, setDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  let [service, setService] = React.useState('');
  const dispatch = useDispatch();

  const increment = () => {
    if (count < vehicles.stock) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    getProfiler();
    getIdFavorite();
    const filtWishlist = fav.filter(item => item.vehicleId === vehicleId);
    if (filtWishlist.length > 0) {
      setFavoriteReady(true);
      setIdFavorite(filtWishlist[0].id);
    } else {
      setFavoriteReady(false);
      setIdFavorite(null);
    }
  }, []);
  let urlImg = {
    uri: vehicles?.image,
  };
  // console.log(urlImg);
  const getProfiler = async () => {
    await dispatch(getDetailVehicle(vehicleId));
  };

  const getIdFavorite = () => {
    dispatch(getFavoriteId(token));
  };

  const onReservation = () => {
    var endDate = new Date(
      new Date(date).getTime() + service * 24 * 60 * 60 * 1000,
    );
    // console.log(date, endDate);
    dispatch(orderCount(count, date, endDate, service));
    navigation.navigate('Payment');
  };

  const onFavorite = async event => {
    event.preventDefault();
    const dataa = { userId: user.userId, vehicleId: vehicleId };
    await http()
      .post('/favorite', qs.stringify(dataa))
      .then(res => {
        if (res.status < 400) {
          setFavoriteReady(true);
          getDetailVehicle(vehicleId);
        }
      })
      .catch(e => {
        // setFavoriteReady(false);
      });
  };

  const onFavoriteDel = async event => {
    // console.log(idFavorite);
    event.preventDefault();
    await http()
      .delete(`/favorite/${idFavorite}`)
      .then(res => {
        if (res.status < 400) {
          // setWhislist(res.data.results)
          setFavoriteReady(false);
          getDetailVehicle(vehicleId);
        }
      })
      .catch(e => {
        // setFavoriteReady(true);
        console.log('failed');
      });
  };

  // const deleteWihslist = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true)
  //   const token = window.localStorage.getItem('token');
  //   await http(token).delete(`/users/favorite-product/${idWishlist}`)
  //     .then(res => {
  //       if (res.status < 400) {
  //         setWhislist(true)
  //         setWhislistReady(false)
  //         dispatch(getWishLlists)
  //       }
  //     })
  //     .catch(err => {
  //       setWhislist(false)
  //       // setWhislistReady(true)
  //     })
  //   setIsLoading(true)
  // }

  return (
    <>
      <SafeAreaView style={styles.screen}>
        <ScrollView>
          <Image
            width={'100%'}
            height="220"
            source={urlImg}
            // source={require('../../src/assets/images/1.png')}
            alt="image"
            style={styles.headerImg}
          />
          <View style={styles.back}>
            <View style={styles.love}>
              <View style={styles.left}>
                <TouchableOpacity onPress={() => goBack()}>
                  <FontAwesome size={40} color="#F56D91" name="chevron-left" />
                </TouchableOpacity>
              </View>
              <View style={styles.right}>
                <TouchableOpacity style={styles.rating}>
                  <Text>4.5</Text>
                  <ADicon size={23} color="#8D8DAA" name="star" />
                </TouchableOpacity>
                <TouchableOpacity>
                  {favoriteReady ? (
                    <FAicon
                      size={40}
                      onPress={onFavoriteDel}
                      color="#F56D91"
                      name="heart"
                    />
                  ) : (
                    <FAicon
                      size={40}
                      onPress={onFavorite}
                      color="#F56D91"
                      name="heart-o"
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.rows}>
              <View>
                <Text style={styles.name}>{vehicles?.name}</Text>
                <Text style={styles.price}>Rp. {vehicles?.price}/day</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <IONicon
                    size={40}
                    color="#F56D91"
                    name="chatbubble-outline"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.desc}>
              <Text style={styles.tetxDesc}>Max for 2 person</Text>
              <Text style={styles.tetxDesc}>No Prepayment</Text>
              <Text style={styles.ready}>Available</Text>
            </View>
            <View style={styles.ion}>
              <View style={styles.rows}>
                <View style={styles.ionicon}>
                  <IONicon size={35} color="#F56D91" name="location-sharp" />
                </View>
                <Text style={styles.textLoc}>{vehicles?.location}</Text>
              </View>
              <View style={styles.rows}>
                <View style={styles.ionicons}>
                  <FontAwesome size={35} color="#F56D91" name="walking" />
                </View>
                <Text style={styles.textLoc}>3.2 miles from your location</Text>
              </View>
            </View>
            <View style={styles.selectRow}>
              <Text style={styles.select}>Select Bikes :</Text>
              <TouchableOpacity onPress={decrement}>
                <FontAwesome
                  style={styles.plus}
                  size={20}
                  color="#FFF"
                  name="minus"
                />
              </TouchableOpacity>
              <Text style={styles.count}>{count}</Text>
              <TouchableOpacity onPress={increment}>
                <FontAwesome
                  style={styles.plus}
                  size={20}
                  color="#FFF"
                  name="plus"
                />
              </TouchableOpacity>
            </View>
            <View>
              <View>
                <Modal
                  transparent={true}
                  animationType="slide"
                  visible={modalVisible}>
                  <View style={styles.datetime}>
                    <TouchableOpacity style={styles.close}>
                      <Text style={styles.selectDate}>Select Date</Text>
                      <FAicon
                        onPress={() => setModalVisible(!modalVisible)}
                        size={40}
                        color="#F56D91"
                        name="close"
                      />
                    </TouchableOpacity>
                    <View>
                      <DatePicker
                        date={date}
                        mode="date"
                        onDateChange={setDate}
                      />
                    </View>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}
                      style={styles.save}>
                      <Text style={styles.textSave}>Save</Text>
                    </TouchableOpacity>
                  </View>
                </Modal>
              </View>
              <TouchableOpacity style={styles.inputDate}>
                <Input
                  variant="filled"
                  placeholder="Select Date"
                  w="40%"
                  maxWidth="300px"
                  value={date.toString('DD-MM-YYYY')}
                />
                <FAicon
                  style={styles.iconDate}
                  onPress={() => setModalVisible(true)}
                  size={30}
                  color="#F56D91"
                  name="calendar"
                />
                <Center>
                  <Box w="1/3">
                    <Select
                      selectedValue={service}
                      minWidth="100"
                      accessibilityLabel="Choose Day"
                      placeholder="Day"
                      onValueChange={itemValue => setService(itemValue)}>
                      <Select.Item label="1 Day" value="1" />
                      <Select.Item label="2 Day" value="2" />
                      <Select.Item label="3 Day" value="3" />
                      <Select.Item label="4 Day" value="4" />
                      <Select.Item label="5 Day" value="5" />
                    </Select>
                  </Box>
                </Center>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Button
                  onPress={onReservation}
                  styles={styles.reservation}
                  size="lg"
                  py="3"
                  mt="5"
                  rounded={15}>
                  Reservation
                </Button>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  reservation: {
    color: '#8D8DAA',
  },
  iconDate: {
    marginStart: 20,
    marginRight: -30,
  },
  inputDate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  save: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSave: {
    backgroundColor: '#8D8DAA',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  selectDate: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingStart: 10,
  },
  close: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(245, 109, 145, 0.3)',
    paddingEnd: 10,
    paddingBottom: 5,
    borderRadius: 15,
  },
  datetime: {
    backgroundColor: 'white',
    position: 'absolute',
    top: '40%',
    left: '10%',
    borderRadius: 20,
    elevation: 3,
    // flexDirection: 'row',
  },
  count: {
    fontSize: 24,
  },
  plus: {
    backgroundColor: '#8D8DAA',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 7,
  },
  selectRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textLoc: {
    marginVertical: 15,
    marginHorizontal: 10,
    fontSize: 16,
  },
  select: {
    fontWeight: 'bold',
    color: '#8D8DAA',
    fontSize: 16,
    marginVertical: 15,
  },
  ion: {
    alignItems: 'flex-start',
  },
  ionicon: {
    backgroundColor: 'rgba(245, 109, 145, 0.3)',
    width: 50,
    height: 50,
    paddingLeft: 8,
    paddingTop: 5,
    borderRadius: 10,
    marginVertical: 5,
  },
  ionicons: {
    backgroundColor: 'rgba(245, 109, 145, 0.3)',
    width: 50,
    height: 50,
    paddingLeft: 12,
    paddingTop: 5,
    borderRadius: 10,
    marginVertical: 5,
  },
  tetxDesc: {
    fontWeight: '400',
    marginVertical: 3,
  },
  ready: {
    color: '#8D8DAA',
    fontWeight: '600',
    fontSize: 16,
  },
  desc: {
    marginVertical: 15,
  },
  container: {
    backgroundColor: '#F7F5F2',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    elevation: 3,
    // paddingBottom: 65,
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#8D8DAA',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8D8DAA',
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rating: {
    backgroundColor: '#F56D91',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginRight: 10,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  right: {
    flexDirection: 'row',
  },
  love: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  back: {
    position: 'absolute',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  screen: {
    height: '100%',
    backgroundColor: '#DFDFDE',
  },
  headerImg: {
    width: '100%',
    position: 'relative',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});

export default Reservation;
