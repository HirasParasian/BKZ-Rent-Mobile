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
import AntDesign from 'react-native-vector-icons/AntDesign';
import SignupImg from '../src/assets/images/signup.png';

export default function App() {
  return (
    <ImageBackground
      source={SignupImg}
      resizeMode={'cover'}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>LET’S EXPLORE THE WORLD</Text>
        <TextInput
          style={styles.input}
          placeholder="username"
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.input}
          keyboardType="text"
          placeholder="password"
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="mobile phone"
          placeholderTextColor="#fff"
        />
        <TouchableOpacity>
          <Text> Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text_size}> Login </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_signup}>
          <AntDesign name="google" size={24} color="black" />
          <Text style={styles.text_size}> Signup With Google</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    // </View>
  );
}

const styles = StyleSheet.create({
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
