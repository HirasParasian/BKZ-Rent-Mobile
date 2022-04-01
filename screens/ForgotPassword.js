import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ForgotImg from '../src/assets/images/forgot.png';

export default function App() {
  return (
    // <View>
    <ImageBackground
      source={ForgotImg}
      resizeMode={'cover'}
      style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="chevron-back" size={24} color="black" />
          <Text> Back </Text>
        </TouchableOpacity>
        <Text style={styles.text}>THAT’S OKAY, WE GOT YOUR BACK</Text>
        <Text>Enter your email to get reset password code</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email adress"
          placeholderTextColor="#fff"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text_size}> Send Code </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_signup}>
          <Text style={styles.text_size}> Resend Code</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    height: '100%',
    opacity: 0.8,
  },
  icon: {
    flexDirection: 'row',
  },
  text_size: {
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: 30,
    marginTop: 150,
    flex: 1,
    fontFamily: 'arial',
    fontWeight: 'bold',
    color: 'black',
  },
  container: {
    // backgroundColor: '#ecf0f1',
    padding: 20,
    flex: 1,
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
    paddingVertical: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFCD61',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});
