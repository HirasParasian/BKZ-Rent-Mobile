/* eslint-disable react-hooks/exhaustive-deps */
import { StyleSheet, View } from 'react-native';
import { Image, Center, Box, Text, Button } from 'native-base';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailHistory } from '../src/redux/actions/history';
import { Rating, AirbnbRating } from 'react-native-ratings';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const DetailHistory = ({ route, navigation, navigation: { goBack } }) => {
  const history = useSelector(state => state.history.detailHistory);
  const dispatch = useDispatch();
  const { historyId } = route.params;

  React.useEffect(() => {
    getProfiler();
  }, []);

  const getProfiler = async () => {
    await dispatch(getDetailHistory(historyId));
  };

  return (
    <View>
      <Image
        width={'100%'}
        height="220"
        borderBottomRadius={30}
        source={{ uri: history?.image }}
        alt="image"
      />
      <View style={styles.back}>
        <View style={styles.love}>
          <View style={styles.left}>
            <Button onPress={() => goBack()} variant={'ghost'}>
              <FontAwesome size={40} color="#F56D91" name="chevron-left" />
            </Button>
          </View>
        </View>
      </View>
      <Center>
        <Text bold fontSize={30}>
          {history.vehicle}
        </Text>
      </Center>
      <AirbnbRating
        count={5}
        reviewSize={0}
        reviews={false}
        styles={styles.rating}
        size={20}
      />
      <Text mx={5} bold fontSize={20}>
        Booking Info :
      </Text>
      <Box
        mx={3}
        px={3}
        py={5}
        my={1}
        borderWidth={2}
        borderBottomRadius={10}
        borderTopRadius={10}
        borderColor={'pink.300'}>
        <Text>Booking Name : {history.rentName}</Text>
        <Text>ID Card Number : {history.idCardNumber}</Text>
        <Text>Email : {history.emailAddress}</Text>
        <Text>Location : {history.location}</Text>
      </Box>
      <Center>
        <Text bold>Booking Code : {history.bookingCode}</Text>
        <Text bold>Payment Code : {history.paymentCode}</Text>
      </Center>
      <Box
        mx={3}
        px={3}
        py={5}
        my={1}
        borderWidth={2}
        borderBottomRadius={10}
        borderTopRadius={10}
        borderColor={'pink.300'}>
        <Text>Start Day Rent : {history.rentStartDate} Day</Text>
        <Text>End Day Rent : {history.rentEndDate} Day</Text>
        <Text>Total Day : {history.days} Day</Text>
        <Text>Total Price : {history.totalPrice}</Text>
      </Box>
    </View>
  );
};

export default DetailHistory;

const styles = StyleSheet.create({
  back: {
    position: 'absolute',
  },
});
