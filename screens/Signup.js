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
import { Input } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SignupImg from '../src/assets/images/signup.png';

export default function App({ navigation }) {
  return (
    <ImageBackground
      source={SignupImg}
      resizeMode={'cover'}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>LET’S EXPLORE THE WORLD</Text>
        <Input
          my={'3'}
          rounded={'10'}
          variant={'filled'}
          style={styles.input}
          placeholder="username"
          placeholderTextColor="#000"
        />
        <Input
          rounded={'10'}
          variant={'filled'}
          style={styles.input}
          secureTextEntry={true}
          placeholder="password"
          placeholderTextColor="#000"
        />
        <Input
          my={'3'}
          rounded={'10'}
          variant={'filled'}
          style={styles.input}
          keyboardType="numeric"
          placeholder="mobile phone"
          placeholderTextColor="#000"
        />
        <TouchableOpacity style={styles.button}>
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
