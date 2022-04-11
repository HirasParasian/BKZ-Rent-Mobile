import React, { useState } from 'react';
import { loginProcess } from '../src/redux/actions/auth';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Input, Text, Center } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import LoginImg from '../src/assets/images/login.png';
import ModalError from '../src/component/ModalError';
export default function Login({ navigation }) {
  const auth = useSelector(state => state.auth);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const onLogin = () => {
    console.log(username, password);
    dispatch(loginProcess(username, password));
  };
  return (
    <ImageBackground
      source={LoginImg}
      resizeMode={'cover'}
      style={styles.background}>
      <ModalError message={auth.errMsg} />
      <View style={styles.container}>
        <Center>
          <Text bold fontSize={35} style={styles.text}>
            LET’S EXPLORE THE WORLD
          </Text>
        </Center>
        <Input
          rounded={'10'}
          variant={'filled'}
          style={styles.input}
          placeholder="username"
          placeholderTextColor="blue"
          value={username}
          onChangeText={setUsername}
        />
        <Input
          rounded={'10'}
          variant={'filled'}
          my={'3'}
          style={styles.input}
          secureTextEntry={true}
          placeholder="password"
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.signup}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text> Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('VerifyEmail')}>
            <Text> VerifyEmail?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onLogin} style={styles.button}>
          <Text style={styles.text_size}> Login </Text>
        </TouchableOpacity>
        <View style={styles.signup}>
          <Text style={styles.dont}>Don’t have account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.dont}>Sign up now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
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
    color: 'black',
  },
  text: {
    marginBottom: 120,
    color: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderRadius: 10,
    // borderColor: 'transparent',
    backgroundColor: '#DFDEDE',
    color: 'black',
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    paddingVertical: 20,
    // opacity: 0.4,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFCD61',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },
});
