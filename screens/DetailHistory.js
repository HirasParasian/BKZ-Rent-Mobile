/* eslint-disable react-hooks/exhaustive-deps */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailHistory } from '../src/redux/actions/history';

const DetailHistory = ({ route }) => {
  const dispatch = useDispatch();
  const { historyId } = route.params;

  React.useEffect(() => {
    getProfiler();
  }, []);

  const getProfiler = async () => {
    await dispatch(getDetailHistory(historyId));
    await dispatch(getDetailHistory(historyId));
  };
  console.log(historyId);
  return (
    <View>
      <Text>DetailHistory</Text>
    </View>
  );
};

export default DetailHistory;

const styles = StyleSheet.create({});
