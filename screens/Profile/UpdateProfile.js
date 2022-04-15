import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { Text, Button, Input, Pressable } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, OnEditProfile } from '../../src/redux/actions/auth';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-date-picker';
import FAicon from 'react-native-vector-icons/FontAwesome';
import ModalSuccess from '../../src/component/ModalSuccess';
import ModalError from '../../src/component/ModalError';
import Back from '../../src/component/Back';

export default function App({ navigation, navigation: { goBack } }) {
  const auth = useSelector(state => state.auth);
  const data = useSelector(state => state.auth?.userData);
  // console.log(date?.birthDate);
  const token = auth?.token;
  const [date, setDate] = useState(new Date());
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'CLEAR_UPDATE_MESSAGE',
    });
  }, [dispatch]);
  const onEdit = () => {
    dispatch(
      OnEditProfile(fullName, email, mobileNumber, address, date, token),
    );
    dispatch(getProfile(auth?.token));
  };

  console.log(date);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    // <View>
    <>
      <Pressable onPress={() => goBack()}>
        <Back name={'Update Profile'} />
      </Pressable>

      <View style={styles.container}>
        {auth.updateProfile && <ModalSuccess message={auth?.successMsg} />}
        {auth.isError && <ModalError message={auth?.errMsg} />}
        <View style={styles.form}>
          <Input
            variant={'underlined'}
            defaultValue={data?.fullName}
            placeholderTextColor="#fff"
            onChangeText={setFullName}
            w={{
              base: '100%',
              md: '25%',
            }}
            InputLeftElement={
              <Text>
                <MaterialIcons size={20} name="person" />
              </Text>
            }
            placeholder="Name"
          />
          <Input
            defaultValue={data?.email}
            placeholderTextColor="#fff"
            variant={'underlined'}
            onChangeText={setEmail}
            w={{
              base: '100%',
              md: '25%',
            }}
            InputLeftElement={
              <Text>
                <MaterialIcons size={20} name="mail" />
              </Text>
            }
            placeholder="Name"
          />
          <Input
            defaultValue={data?.mobileNumber}
            placeholderTextColor="#fff"
            variant={'underlined'}
            onChangeText={setMobileNumber}
            w={{
              base: '100%',
              md: '25%',
            }}
            InputLeftElement={
              <Text>
                <MaterialIcons size={20} name="phone" />
              </Text>
            }
            placeholder="Name"
          />
          <Input
            defaultValue={data?.address}
            placeholderTextColor="#fff"
            variant={'underlined'}
            onChangeText={setAddress}
            w={{
              base: '100%',
              md: '25%',
            }}
            InputLeftElement={
              <Text>
                <MaterialIcons size={20} name="home-work" />
              </Text>
            }
            placeholder="Address"
          />
          <Button
            onPress={onEdit}
            w="100%"
            my={'1'}
            py={'3'}
            rounded={10}
            style={styles.Button}
            colorScheme={'pink'}
            variant="subtle">
            <Text>Save</Text>
          </Button>
        </View>
      </View>
    </>
    //   </ImageBackground>
    // </View>
  );
}

const styles = StyleSheet.create({
  rows: { flexDirection: 'row' },
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
  form: {
    marginBottom: 100,
    marginTop: 30,
  },
  column: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  back: {
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text_size: {
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  input: {
    borderColor: 'transparent',
    borderBottomColor: '#9F9F9F',
    height: 40,
    borderWidth: 1,
    paddingVertical: 10,
    opacity: 0.5,
    marginBottom: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFCD61',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    marginLeft: 10,
    width: 160,
  },
});
