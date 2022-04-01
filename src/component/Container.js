import { View, StyleSheet } from 'react-native';
import React from 'react';

export default function Container({ children, style }) {
  const styles = StyleSheet.create({
    container: {
      margin: 10,
    },
  });

  return <View style={[styles.container, style]}>{children}</View>;
}
