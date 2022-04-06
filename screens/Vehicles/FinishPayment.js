import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import {
  Container,
  Center,
  Button,
  Box,
  Text,
  ScrollView,
  HStack,
} from 'native-base';
import Back from '../../src/component/Back';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Order from '../../src/assets/images/1.png';
const FinishPayment = ({ navigation }) => {
  const data = {
    image: require('../../src/assets/images/1.png'),
    location: 'Makassar',
    price: 250000,
    title: 'Vespa Matic',
    isAvailable: true,
  };
  return (
    <>
      <Back name={'See History'} />
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.elevate}>
            <TouchableOpacity style={styles.coverImg}>
              <Image
                alt={data.location}
                source={Order}
                style={styles.listImg}
              />
            </TouchableOpacity>
            <View style={styles.textVehicle}>
              <Text style={styles.text}>
                Kintamani, 0.1 miles from your location
              </Text>
              <View style={styles.rows}>
                <View>
                  <Text style={styles.textName}>{data.title}</Text>
                  <Text style={styles.textAvailable}>Available</Text>
                </View>
                <View>
                  <Text style={styles.textName}>4 Days</Text>
                  <Text style={styles.textName}>Jan 18-21 2021</Text>
                </View>
              </View>
            </View>
          </View>
          <Center>
            <Text fontSize={'md'}>Booking code : VSP09875</Text>
            <Text my="3">Use booking code to pick up your vespa</Text>
            <Button
              onPress={() => navigation.navigate('PaymentCode')}
              w="60%"
              my={'1'}
              py={'2'}
              rounded={10}
              style={styles.Button}
              colorScheme={'pink'}
              variant="subtle">
              <Text>Copy Payment & Booking Code</Text>
            </Button>
          </Center>
          <Container my={'5'} mx={'5'}>
            <Text my={'1'} mx={'5'}>
              ID : 9087627392624
            </Text>
            <Text my={'1'} mx={'5'}>
              Jessica Jane (jjane@mail.com)
            </Text>
            <Text my={'1'} mx={'5'}>
              0890876789 (active)
            </Text>
            <Text my={'1'} mx={'5'}>
              Jakarta, Indonesia
            </Text>
          </Container>
          <Center>
            <Button
              // onPress={() => navigation.navigate('PaymentCode')}
              w="80%"
              my={'1'}
              py={'4'}
              rounded={10}
              style={styles.Button}
              colorScheme={'pink'}
              variant="subtle">
              <Text bold>Total : 245.000</Text>
            </Button>
          </Center>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  content: { paddingBottom: 70 },
  rows: {
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: 'grey',
  },
  textName: {
    fontSize: 16,
    color: '#8D8DAA',
    fontWeight: 'bold',
  },
  textAvailable: {
    fontSize: 16,
    color: '#F56D91',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 25,
    color: '#F56D91',
    fontWeight: 'bold',
    paddingTop: 10,
  },
  textVehicle: {
    backgroundColor: 'pink',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 20,
    paddingTop: 8,
    paddingHorizontal: 12,
  },
  Button: {
    backgroundColor: '#8D8DAA',
    opacity: 0.8,
  },
  elevate: {
    marginVertical: 20,
    elevation: 5,
    borderRadius: 30,
    marginHorizontal: 20,
  },
  listImg: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '100%',
  },
  coverImg: {
    elevation: 3,
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
export default FinishPayment;
