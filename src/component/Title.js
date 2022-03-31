import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign';

const Title = ({ child, resChild, onPress }) => {
  return (
    <View style={styles.t}>
      <Text style={styles.header}>{child}</Text>
      <TouchableOpacity style={styles.link} onPress={onPress}>
        <Text>{resChild}</Text>
        <Ionicons style={styles.icon} name="right" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginStart: 5,
    marginTop: 3,
  },
  t: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    marginLeft: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Title;
