import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import {
  Container,
  Center,
  Button,
  Image,
  Text,
  ScrollView,
} from 'native-base';
import Back from '../../src/component/Back';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Order from '../../src/assets/images/1.png';
import { useSelector } from 'react-redux';
const FinishPayment = ({ navigation }) => {
  const transaction = useSelector(state => state.transaction);
  const vehicles = useSelector(state => state.vehicle?.detailVehicle);
  console.log('===========================' + vehicles.image);
  return (
    <>
      <Back
        onPress={() => navigation.navigate('History')}
        name={'See History'}
      />
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.elevate}>
            <TouchableOpacity style={styles.coverImg}>
              <Image
                width={'100%'}
                height="180"
                alt={vehicles.name}
                source={{ uri: vehicles?.image }}
                style={styles.listImg}
              />
            </TouchableOpacity>
            <View style={styles.textVehicle}>
              <Text style={styles.text}>
                Kintamani, 0.1 miles from your location
              </Text>
              <View style={styles.rows}>
                <View>
                  <Text style={styles.textName}>{vehicles.name}</Text>
                  <Text style={styles.textAvailable}>Available</Text>
                </View>
                <View>
                  <Text style={styles.textName}>4 Days</Text>
                  <Text style={styles.textName}>
                    {transaction.rentStartDate} - {transaction.rentEndDate}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Center>
            <Text fontSize={'md'}>
              Booking code : {transaction.bookingCode}
            </Text>
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
              ID : {transaction.idCardNumber}
            </Text>
            <Text my={'1'} mx={'5'}>
              {transaction.rentName} {transaction.emailAddress}
            </Text>
            <Text my={'1'} mx={'5'}>
              {transaction.mobilePhone} (active)
            </Text>
            <Text my={'1'} mx={'5'}>
              {transaction.location}, Indonesia
            </Text>
          </Container>
          <Center>
            <Button
              onPress={() => navigation.navigate('Home')}
              w="80%"
              my={'1'}
              py={'4'}
              rounded={10}
              style={styles.Button}
              colorScheme={'pink'}
              variant="subtle">
              <Text bold>Total : {transaction.stock * vehicles.price}</Text>
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
