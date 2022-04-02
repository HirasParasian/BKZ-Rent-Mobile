import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Stepper from '../../src/component/Stepper';

const Payment = () => {
  return (
    <View>
      <Stepper count={3} currentlyActive={2} />
    </View>
  );
};

export default Payment;
