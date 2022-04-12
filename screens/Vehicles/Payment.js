/* eslint-disable react-hooks/exhaustive-deps */
import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import Stepper from '../../src/component/Stepper';
import { Container, Center, Input, Select, Button } from 'native-base';
import Back from '../../src/component/Back';
import { useDispatch, useSelector } from 'react-redux';
import pushNotif from 'react-native-push-notification';
import {
  orderDetail,
  OnCreatePayment,
} from '../../src/redux/actions/transaction';

const Payment = ({ navigation, navigation: { goBack } }) => {
  const localNotification = () => {};
  //STATE SET
  const [idCardNumber, setIdCardNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [location, setLocation] = useState('');
  let [paymentType, setPaymentType] = React.useState('');
  const [paymentCode, setPaymentCode] = useState();
  const [bookingCode, setBookingCode] = useState();
  //END STATE SET

  //SELECTOR
  const data = useSelector(state => state.auth?.userData);
  const transaction = useSelector(state => state.transaction);
  const vehicles = useSelector(state => state.vehicle?.detailVehicle);
  const code = `${vehicles?.name[0]}${vehicles?.name[1]}${vehicles?.name[2]}`;
  const fixCode = code.toUpperCase();
  //END SELECTOR

  const name = data.fullName?.split(' ');
  const name2 = name?.slice(1);
  const first = name[0];
  const last = name2.join(' ');
  const dispatch = useDispatch();
  useEffect(() => {
    setFirstName(first);
    setLastName(last);
    setMobilePhone(data.mobileNumber);
    setEmailAddress(data.email);
    setLocation(data.address);
    setPaymentCode(
      `${Math.round(Math.random() * (99999999 - 10000000) + 10000000)}`,
    );
    setBookingCode(
      `${fixCode}${Math.round(Math.random() * (99999 - 10000) + 10000)}`,
    );
  }, []);

  // const transaction = useSelector(state => state.transaction);
  // console.log(transaction?.startDate);
  const onOrderDetail = () => {
    let fullName = firstName + ' ' + lastName;
    dispatch(
      orderDetail(
        idCardNumber,
        fullName,
        mobilePhone,
        emailAddress,
        location,
        paymentType,
        paymentCode,
        bookingCode,
      ),
    );
    dispatch(
      OnCreatePayment(
        transaction.startDate,
        transaction.endDate,
        data.userId,
        vehicles.vehicleId,
        transaction.stock,
        idCardNumber,
        fullName,
        mobilePhone,
        emailAddress,
        location,
        paymentType,
        paymentCode,
        bookingCode,
      ),
    );
    pushNotif.localNotification({
      channelId: 'Transaction',
      message: 'Transaction Created',
      title: `${vehicles.name}`,
    });
    navigation.replace('PaymentCode');
  };

  return (
    <>
      <View>
        <Back onPress={() => goBack()} name={'Payment'} />
      </View>
      <Center py={'5'}>
        <Container>
          <Stepper count={3} currentlyActive={1} />
        </Container>
      </Center>
      <Center py={'5'}>
        <Input
          rounded={10}
          my={'1'}
          py={'3'}
          w="80%"
          variant="filled"
          keyboardType="numeric"
          value={idCardNumber}
          onChangeText={setIdCardNumber}
          _focus={{ borderColor: 'pink.300' }}
          placeholder="ID Card Number "
        />
        <Input
          rounded={10}
          my={'1'}
          py={'3'}
          w="80%"
          variant="filled"
          defaultValue={firstName}
          onChangeText={setFirstName}
          _focus={{ borderColor: 'pink.300' }}
          placeholder="First Name "
        />
        <Input
          rounded={10}
          my={'1'}
          py={'3'}
          w="80%"
          variant="filled"
          defaultValue={lastName}
          onChangeText={setLastName}
          _focus={{ borderColor: 'pink.300' }}
          placeholder="Last Name"
        />
        <Input
          rounded={10}
          my={'1'}
          py={'3'}
          w="80%"
          variant="filled"
          keyboardType="numeric"
          defaultValue={mobilePhone}
          onChangeText={setMobilePhone}
          _focus={{ borderColor: 'pink.300' }}
          placeholder="Mobile Phone (must be active) "
        />
        <Input
          rounded={10}
          my={'1'}
          py={'3'}
          w="80%"
          variant="filled"
          defaultValue={emailAddress}
          onChangeText={setEmailAddress}
          _focus={{ borderColor: 'pink.300' }}
          placeholder="Email Address"
        />
        <Input
          rounded={10}
          my={'1'}
          py={'3'}
          w="80%"
          variant="filled"
          defaultValue={location}
          onChangeText={setLocation}
          _focus={{ borderColor: 'pink.300' }}
          placeholder="Location (home, office, etc.)"
        />
        <Select
          w="80%"
          my={'1'}
          py={'3'}
          variant="filled"
          placeholder="Payment Type"
          onValueChange={itemValue => setPaymentType(itemValue)}>
          <Select.Item label="Prepayment (no tax)" value="1" />
          <Select.Item label="Pay at the end (include tax)" value="2" />
          <Select.Item label="Partial payment (include tax)" value="3" />
        </Select>
        <Button
          onPress={onOrderDetail}
          w="80%"
          my={'1'}
          py={'3'}
          rounded={10}
          style={styles.Button}
          colorScheme={'pink'}
          variant="subtle">
          <Text>See Order Details</Text>
        </Button>
      </Center>
    </>
  );
};

const styles = StyleSheet.create({
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

export default Payment;
