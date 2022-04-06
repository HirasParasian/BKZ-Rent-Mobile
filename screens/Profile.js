import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import avatar from '../src/assets/images/avatar.png';
import Entypo from 'react-native-vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../src/redux/actions/auth';
import pushNotif from 'react-native-push-notification';

const Profile = ({ navigation }) => {
  const data = useSelector(state => state.auth?.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'CLEAR_UPDATE_MESSAGE',
    });
  }, [dispatch]);

  const localNotification = () => {
    pushNotif.localNotification({
      channelId: 'testId',
      message: 'Message',
      title: 'Title',
    });
  };

  return (
    <>
      <View style={styles.background}>
        <View style={styles.top}>
          <TouchableOpacity>
            <Image style={styles.avatar} source={avatar} />
          </TouchableOpacity>
          <Text style={styles.name}>{data?.fullName}</Text>
          <Text style={styles.email}>{data?.email}</Text>
          <Text style={styles.mobile}>{data?.mobileNumber}</Text>
        </View>
        <View style={styles.mid}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MyFavorite')}
            style={styles.column}>
            <Text style={styles.arrows}>Your Favorites</Text>
            <Entypo name="chevron-right" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('FAQ')}
            style={styles.column}>
            <Text style={styles.arrows}>FAQ</Text>
            <Entypo name="chevron-right" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Help')}
            style={styles.column}>
            <Text style={styles.arrows}>Help</Text>
            <Entypo name="chevron-right" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdateProfile')}
            style={styles.column}>
            <Text style={styles.arrows}>Update Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdatePassword')}
            style={styles.column}>
            <Text style={styles.arrows}>Update Password</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={localNotification} style={styles.column}>
            <Text style={styles.arrows}>Test Local Notif</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => dispatch({ type: 'AUTH_LOGOUT' })}
            style={styles.logout}>
            <Entypo name="log-out" size={30} />
            <Text style={styles.arrows}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#DFDFDE',
    height: '100%',
  },
  logout: {
    backgroundColor: '#8D8DAA',
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 35,
  },
  column: {
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'space-between',
  },
  arrows: {
    fontSize: 20,
  },
  mid: {
    borderRadius: 20,
    elevation: 2,
    backgroundColor: '#F7F5F2',
    paddingVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontWeight: 'bold',
  },
  mobile: {
    fontWeight: 'bold',
  },
  top: {
    elevation: 2,
    backgroundColor: '#F7F5F2',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  avatar: {
    borderRadius: 50,
  },
  tabNavigator: {
    padding: 20,
  },
});

export default Profile;
