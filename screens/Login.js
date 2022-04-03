import React, { useState } from 'react';
import { loginProcess } from '../src/redux/actions/auth';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useDispatch } from 'react-redux';
import LoginImg from '../src/assets/images/login.png';
export default function Login({ navigation }) {
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
      <View style={styles.container}>
        <Text style={styles.text}>LET’S EXPLORE THE WORLD</Text>
        <TextInput
          style={styles.input}
          placeholder="username"
          placeholderTextColor="blue"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="password"
          placeholderTextColor="#fff"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text> Forgot Password?</Text>
        </TouchableOpacity>
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
  },
  text: {
    fontSize: 35,
    marginBottom: 120,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderRadius: 10,
    borderColor: 'transparent',
    backgroundColor: '#DFDEDE',
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    paddingVertical: 20,
    opacity: 0.4,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFCD61',
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
  },
});
