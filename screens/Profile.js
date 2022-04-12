import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Image, Button, Pressable } from 'native-base';
import React, { useEffect, useState } from 'react';
import avatar from '../src/assets/images/avatar.png';
import Entypo from 'react-native-vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux';
import { editProfile, getProfile } from '../src/redux/actions/auth';
import pushNotif from 'react-native-push-notification';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = ({ navigation }) => {
  const auth = useSelector(state => state.auth);
  const data = useSelector(state => state.auth?.userData);
  const [moduleOption, setModuleOption] = useState(false);
  const [picture, setPicture] = useState();
  const [fileName, setFileName] = useState();
  const [fileType, setFileType] = useState();
  const [image, setImage] = React.useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'CLEAR_UPDATE_MESSAGE',
    });
    if (data) {
      setImage(data.images);
    }
  }, [data, data.images, dispatch]);

  const ChoosePhoto = () => {
    const options = {
      noData: true,
    };
    launchImageLibrary(options, response => {
      if (response.assets) {
        setPicture(response.assets[0].uri);
        setFileName(response.assets[0].fileName);
        setFileType(response.assets[0].type);
      }
    });
    setModuleOption(false);
  };
  const chooseCamera = () => {
    const options = {
      noData: true,
    };
    launchCamera(options, response => {
      if (response.assets) {
        setPicture(response.assets[0].uri);
        setFileName(response.assets[0].fileName);
        setFileType(response.assets[0].type);
      }
    });
    setModuleOption(false);
  };
  const saveImage = async () => {
    const data = {
      fileName,
      fileType,
      picture,
    };
    dispatch(editProfile(auth.token, data));
    await dispatch(getProfile(auth?.token));
  };
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
            <Image
              position={'relative'}
              alt="profile"
              rounded={50}
              width={100}
              height={100}
              source={
                picture
                  ? { uri: picture }
                  : auth.userData?.images
                  ? { uri: auth.userData.images }
                  : { avatar }
              }
            />
            <Pressable onPress={chooseCamera}>
              <Icon
                style={styles.absolute}
                size={40}
                color="lightblue"
                name="camera"
              />
            </Pressable>
            <Pressable onPress={ChoosePhoto}>
              <Icon
                style={styles.absolute2}
                size={40}
                color="lightblue"
                name="pencil-circle"
              />
            </Pressable>
            <Button variant={'ghost'} size={'xs'} onPress={saveImage}>
              Save
            </Button>
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
  absolute: { position: 'absolute', bottom: 0, end: 0 },
  absolute2: { position: 'absolute', bottom: 0, start: 0 },
  relative: { position: 'relative' },
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
    marginTop: 5,
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
  tabNavigator: {
    padding: 20,
  },
});

export default Profile;
