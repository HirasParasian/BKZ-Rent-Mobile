import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'native-base';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SignupImg from '../src/assets/images/signup.png';
import { OnRegister } from '../src/redux/actions/auth';
import ModalError from '../src/component/ModalError';
import ModalSuccess from '../src/component/ModalSuccess';

export default function App({ navigation }) {
  const [username, setUsername] = useState('');
  const auth = useSelector(state => state.auth);
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  useEffect(() => {
    dispatch({
      type: 'CLEAR_SIGNUP_MESSAGE',
    });
  }, [dispatch]);
  const dispatch = useDispatch();
  const onSignup = () => {
    console.log(username, password, mobileNumber);
    dispatch(OnRegister(username, password, mobileNumber));
  };
  return (
    <ImageBackground
      source={SignupImg}
      resizeMode={'cover'}
      style={styles.background}>
      {auth.isError && <ModalError message={auth?.errMsg} />}
      {auth.signup && <ModalSuccess message={auth?.successMsg} />}
      <View style={styles.container}>
        <Text style={styles.text}>LET’S EXPLORE THE WORLD</Text>
        <Input
          my={'3'}
          rounded={'10'}
          variant={'filled'}
          style={styles.input}
          placeholder="username"
          placeholderTextColor="#000"
          value={username}
          onChangeText={setUsername}
        />
        <Input
          rounded={'10'}
          variant={'filled'}
          style={styles.input}
          secureTextEntry={true}
          placeholder="password"
          placeholderTextColor="#000"
          value={password}
          onChangeText={setPassword}
        />
        <Input
          my={'3'}
          rounded={'10'}
          variant={'filled'}
          style={styles.input}
          keyboardType="numeric"
          placeholder="mobile phone"
          placeholderTextColor="#000"
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />
        <TouchableOpacity onPress={onSignup} style={styles.button}>
          <Text style={styles.text_size}> Sign Up </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_signup}>
          <AntDesign name="google" size={24} color="black" />
          <Text style={styles.text_size}> Signup With Google</Text>
        </TouchableOpacity>
        <View style={styles.signup}>
          <Text style={styles.dont}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.dont}>Login now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
    // </View>
  );
}

const styles = StyleSheet.create({
  signup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  dont: {
    fontSize: 15,
    color: 'white',
    marginTop: 10,
  },
  background: {
    height: '100%',
    opacity: 0.8,
  },
  text_size: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 35,
    marginBottom: 90,
    fontFamily: 'arial',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  button_signup: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    borderRadius: 10,
    borderColor: 'transparent',
    backgroundColor: '#DFDEDE',
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    opacity: 0.5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFCD61',
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
  },
});
