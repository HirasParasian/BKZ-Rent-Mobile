import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const ITEM_WH = 48;

const Stepper = ({ currentlyActive, count, weight = ITEM_WH }) => {
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    lineWrapper: {
      flexDirection: 'row',
      position: 'absolute',
      width: '100%',
      justifyContent: 'space-around',
    },
    line: {
      height: 4,
      width: weight + 10,
    },
    stepper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: weight,
    },
    item: {
      width: weight,
      height: weight,
      borderRadius: weight / 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: weight / 2,
      color: 'white',
      fontWeight: 'bold',
    },
  });

  const STEPPER_WIDTH = (weight + 10) * count;
  return (
    <View style={styles.wrapper}>
      <View style={[styles.stepper, { width: STEPPER_WIDTH }]}>
        <View style={styles.lineWrapper}>
          {[...Array(count - 1)].map((o, i) => {
            return (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={
                  currentlyActive - 1 >= i + 1
                    ? ['#8D8DAA', '#F56D91']
                    : ['#DFDEDE', '#DFDEDE']
                }
                style={styles.line}
              />
            );
          })}
        </View>
        {[...Array(count)].map((o, i) => {
          return (
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={
                currentlyActive >= i + 1
                  ? ['#8D8DAA', '#F56D91']
                  : ['#DFDEDE', '#DFDEDE']
              }
              style={styles.item}>
              <Text style={styles.text}>{i + 1}</Text>
            </LinearGradient>
          );
        })}
      </View>
    </View>
  );
};

export default Stepper;
