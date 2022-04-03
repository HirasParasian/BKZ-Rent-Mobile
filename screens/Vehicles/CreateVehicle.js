import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import Camera from '../../src/assets/images/cameras.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { OnCreate } from '../../src/redux/actions/vehicle';
import ModalSuccess from '../../src/component/ModalSuccess';
import ModalError from '../../src/component/ModalError';
import {
  Container,
  Center,
  Text,
  Input,
  Select,
  Button,
  Image,
  ScrollView,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';

const CreateVehicle = () => {
  const auth = useSelector(state => state.auth);
  const vehicle = useSelector(state => state.vehicle);
  // console.log(vehicle.errMsg[0]);
  useEffect(() => {
    dispatch({
      type: 'CLEAR_MESSAGE',
    });
  }, [dispatch]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [description, serDescription] = useState('');
  let [location, setLocation] = React.useState('');
  let [category, setCategory] = React.useState('');
  // const hiddenFileInput = useRef(null);
  const token = auth.token;
  const dispatch = useDispatch();
  const onCreated = () => {
    console.log(name, price, stock, description, location, category, token);
    dispatch(
      OnCreate(name, price, stock, description, location, category, token),
    );
  };

  //Upload File Handler
  // const uploadFile = e => {
  //   e.preventDefault();
  //   hiddenFileInput.current.click();
  // };
  // const fileInputHandler = e => {
  //   const reader = new FileReader();
  //   const picture = e.target.files[0];
  //   const profileImage = document.querySelector('#profile-image');
  //   reader.readAsDataURL(picture);
  //   reader.onload = e => {
  //     profileImage.src = e.target.result;
  //     profileImage.className += ' rounded-circle';
  //   };
  //   setDatas({
  //     picture: e.target.files[0],
  //   });
  // };

  return (
    <>
      <ScrollView>
        <View style={styles.content}>
          {vehicle.createVehicle && (
            <ModalSuccess message={'Create Successfully'} />
          )}
          {vehicle?.isError && <ModalError message={vehicle.errMsg[0]} />}
          <View>
            <TouchableOpacity style={styles.icon}>
              <Ionicons name="chevron-back" size={28} color="black" />
              <Text style={styles.back}> Add New Item </Text>
            </TouchableOpacity>
          </View>
          <Center>
            <Image
              my="5"
              width={'100'}
              height={'100'}
              source={Camera}
              alt="upload"
            />
          </Center>
          <Center>
            <Button rounded={10} my={'1'} py={'2'} w="40%">
              <Text fontSize={16} color={'white'} bold>
                Add a Picture
              </Text>
            </Button>
          </Center>
          <Center>
            <Input
              mt="3"
              w="60%"
              variant={'underlined'}
              placeholder="Type product name min. 30 characters"
              borderBottomColor="gray.400"
              value={name}
              onChangeText={setName}
            />
            <Input
              mt="3"
              w="60%"
              variant={'underlined'}
              placeholder="Type product price"
              borderBottomColor="gray.400"
              value={price}
              onChangeText={setPrice}
            />
          </Center>
          <Container mx="5">
            <Container mt="5" mx="5">
              <Text mt="5" bold fontSize={'xl'}>
                Description
              </Text>
            </Container>
          </Container>
          <Center>
            <Input
              w="80%"
              variant={'underlined'}
              placeholder="Type product name min. 30 characters"
              borderBottomColor="gray.400"
              value={description}
              onChangeText={serDescription}
            />
          </Center>
          <Container mx="5">
            <Container mx="5">
              <Text mt="5" bold fontSize={'xl'}>
                Location
              </Text>
            </Container>
          </Container>
          <Center>
            <Select
              w="80%"
              my={'1'}
              py={'3'}
              selectedValue={location}
              onValueChange={itemValue => setLocation(itemValue)}
              variant="underlined"
              borderBottomColor="gray.400"
              placeholder="Select Location">
              <Select.Item label="Bekasi" value="bekasi" />
              <Select.Item label="Bogor" value="bogor" />
              <Select.Item label="Bandung" value="bandung" />
            </Select>
          </Center>
          <Container mx="5">
            <Container mx="5">
              <Text mt="5" bold fontSize={'xl'}>
                Add To
              </Text>
            </Container>
          </Container>
          <Center>
            <Select
              w="80%"
              my={'1'}
              py={'3'}
              selectedValue={category}
              onValueChange={itemValue => setCategory(itemValue)}
              variant="underlined"
              borderBottomColor="gray.400"
              placeholder="Select Category">
              <Select.Item label="Cars" value="3" />
              <Select.Item label="Bike" value="1" />
              <Select.Item label="MotorBike" value="2" />
            </Select>
          </Center>
          <View style={styles.selectRow}>
            <Text style={styles.select}>Stock :</Text>
            <TouchableOpacity>
              <FontAwesome
                style={styles.plus}
                size={20}
                color="#FFF"
                name="minus"
              />
            </TouchableOpacity>
            <Input
              w="20%"
              size={'xl'}
              variant={'solid'}
              placeholder="     0"
              borderBottomColor="gray.400"
              value={stock}
              onChangeText={setStock}
            />
            <TouchableOpacity>
              <FontAwesome
                style={styles.plus}
                size={20}
                color="#FFF"
                name="plus"
              />
            </TouchableOpacity>
          </View>
          <Center>
            <Button onPress={onCreated} rounded={10} my={'1'} py={'4'} w="80%">
              <Text fontSize={16} color={'white'} bold>
                Save Product
              </Text>
            </Button>
          </Center>
        </View>
      </ScrollView>
    </>
  );
};

export default CreateVehicle;

const styles = StyleSheet.create({
  content: { paddingBottom: 80 },
  select: {
    fontWeight: 'bold',
    color: '#8D8DAA',
    fontSize: 16,
    marginVertical: 15,
  },
  count: {
    fontSize: 20,
  },
  plus: {
    backgroundColor: '#8D8DAA',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 7,
  },
  selectRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 40,
    marginVertical: 10,
  },
  Button: {
    backgroundColor: '#8D8DAA',
    opacity: 0.8,
  },
  back: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
});
