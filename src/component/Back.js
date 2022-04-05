import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View, Box } from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Back = ({ name }) => {
  return (
    <View>
      <Box style={styles.line} w="100%" px="5" py="3">
        <View>
          <TouchableOpacity style={styles.icon}>
            <Ionicons color="#F56D91" name="chevron-back" size={38} />
            <Text style={styles.back}> {name} </Text>
          </TouchableOpacity>
        </View>
      </Box>
    </View>
  );
};

export default Back;

const styles = StyleSheet.create({
  back: {
    fontWeight: '900',
    fontSize: 22,
    color: '#F56D91',
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
