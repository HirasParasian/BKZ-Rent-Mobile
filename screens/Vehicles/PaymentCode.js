import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Stepper from '../../src/component/Stepper';
import { Container, Center, Button, Box, Text, ScrollView } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PaymentCode = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <View style={styles.content}>
          <Box>
            <TouchableOpacity style={styles.icon}>
              <Ionicons name="chevron-back" size={28} color="black" />
              <Text style={styles.back}> Payment </Text>
            </TouchableOpacity>
          </Box>
          <Center py={'5'}>
            <Container>
              <Stepper count={3} currentlyActive={3} />
            </Container>
          </Center>
          <Center>
            <Text bold fontSize={'lg'}>
              Payment Code :
            </Text>
            <Text bold fontSize={'4xl'}>
              90887620
            </Text>
            <Text>
              Insert your payment code while you transfer booking order
            </Text>
            <Text bold color={'coolGray.700'} fontSize={'lg'} my="3">
              1:59:34
            </Text>
            <Text>Bank account information :</Text>
            <Text bold fontSize={'2xl'} my="3">
              0290-90203-345-2
            </Text>
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
            <Text mx={'5'}>Order details :</Text>
            <Text mx={'5'}>2 Vespa</Text>
            <Text mx={'5'}>Prepayement (no tax)</Text>
            <Text mx={'5'}>4 days</Text>
            <Text mx={'5'}>Jan 18 2021 to Jan 22 2021</Text>
          </Container>
          <Container pb={'5'} mx={'5'}>
            <Text bold fontSize={'2xl'} mx={'5'}>
              Rp. 245.000
            </Text>
          </Container>
          <Center>
            <Button
              onPress={() => navigation.navigate('FinishPayment')}
              w="80%"
              my={'1'}
              py={'4'}
              rounded={10}
              style={styles.Button}
              colorScheme={'pink'}
              variant="subtle">
              <Text bold>Finish Payment</Text>
            </Button>
          </Center>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  content: { paddingBottom: 70 },
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

export default PaymentCode;
