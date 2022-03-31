import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  DatePickerIOS,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

export default function App() {
  return (
    // <View>
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon}>
        {/* <Ionicons name="chevron-back" size={24} color="black" /> */}
        <Text style={styles.back}> Update Profile </Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <View style={styles.column}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text_size}> Take a Picture </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text_size}> Browse from Galery </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.form}>
        <Text>Name :</Text>
        <TextInput
          style={styles.input}
          defaultValue="Hiras Parasian"
          placeholderTextColor="#fff"
        />
        <Text>Email Address :</Text>
        <TextInput
          style={styles.input}
          defaultValue="hirasparasian@gmail.com"
          placeholderTextColor="#fff"
        />
        <Text>Mobile Number :</Text>
        <TextInput
          style={styles.input}
          defaultValue="081388981122"
          placeholderTextColor="#fff"
        />
        <Text>Date of Birth :</Text>
        <TextInput
          style={styles.input}
          defaultValue="08 November 1999"
          placeholderTextColor="#fff"
        />
        <Text>Delivery Address :</Text>
        {/* <DatePickerIOS /> */}
        <TextInput
          style={styles.input}
          defaultValue="Iskandar Street Block A Number 102"
          placeholderTextColor="#fff"
        />
      </View>
    </View>
    //   </ImageBackground>
    // </View>
  );
}

const styles = StyleSheet.create({
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
    flex: 1,
  },
  text_size: {
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
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
