import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Stepper from '../../src/component/Stepper';
import { Container, Center, Input, Select, Button } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Payment = ({ navigation }) => {
  return (
    <>
      <View>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="chevron-back" size={28} color="black" />
          <Text style={styles.back}> Payment </Text>
        </TouchableOpacity>
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
          _focus={{ borderColor: 'pink.300' }}
          placeholder="ID Card Number "
        />
        <Input
          rounded={10}
          my={'1'}
          py={'3'}
          w="80%"
          variant="filled"
          _focus={{ borderColor: 'pink.300' }}
          placeholder="First Name "
        />
        <Input
          rounded={10}
          my={'1'}
          py={'3'}
          w="80%"
          variant="filled"
          _focus={{ borderColor: 'pink.300' }}
          placeholder="Last Name"
        />
        <Input
          rounded={10}
          my={'1'}
          py={'3'}
          w="80%"
          variant="filled"
          _focus={{ borderColor: 'pink.300' }}
          placeholder="Mobile Phone (must be active) "
        />
        <Input
          rounded={10}
          my={'1'}
          py={'3'}
          w="80%"
          variant="filled"
          _focus={{ borderColor: 'pink.300' }}
          placeholder="Email Address"
        />
        <Input
          rounded={10}
          my={'1'}
          py={'3'}
          w="80%"
          variant="filled"
          _focus={{ borderColor: 'pink.300' }}
          placeholder="Location (home, office, etc.)"
        />
        <Select
          w="80%"
          my={'1'}
          py={'3'}
          variant="filled"
          placeholder="Payment Type">
          <Select.Item label="Prepayment (no tax)" value="ux" />
          <Select.Item label="Pay at the end (include tax)" value="web" />
          <Select.Item label="Partial payment (include tax)" value="cross" />
        </Select>
        <Button
          onPress={() => navigation.navigate('OrderDetails')}
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
