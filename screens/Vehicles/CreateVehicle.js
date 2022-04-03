import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Camera from '../../src/assets/images/cameras.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
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

const CreateVehicle = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.content}>
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
            <Input
              mt="3"
              w="60%"
              variant={'underlined'}
              placeholder="Type product name min. 30 characters"
              borderBottomColor="gray.400"
            />
            <Input
              mt="3"
              w="60%"
              variant={'underlined'}
              placeholder="Type product price"
              borderBottomColor="gray.400"
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
              variant="underlined"
              borderBottomColor="gray.400"
              placeholder="Select Location">
              <Select.Item label="Bekasi" value="ux" />
              <Select.Item label="Bogor" value="web" />
              <Select.Item label="Bandung" value="cross" />
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
              variant="underlined"
              borderBottomColor="gray.400"
              placeholder="Select Category">
              <Select.Item label="Cars" value="ux" />
              <Select.Item label="Bike" value="web" />
              <Select.Item label="MotorBike" value="cross" />
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
            <Text style={styles.count}>0</Text>
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
            <Button rounded={10} my={'1'} py={'4'} w="80%">
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
