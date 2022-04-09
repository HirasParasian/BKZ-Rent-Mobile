import { StyleSheet } from 'react-native';
import {
  Text,
  View,
  Center,
  Image,
  HStack,
  Pressable,
  FlatList,
  ScrollView,
  Button,
} from 'native-base';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyHistory } from '../src/redux/actions/history';
import Icon from 'react-native-vector-icons/FontAwesome5';
const History = () => {
  let [page, setPage] = React.useState(1);
  const auth = useSelector(state => state.auth);
  const pageInfo = useSelector(state => state.history?.historyPage);
  const history = useSelector(state => state.history.myHistory);

  const dispatch = useDispatch();
  const changePages = async number => {
    setPage(number);
    await dispatch(getMyHistory(auth.token, number));
  };

  let active = pageInfo?.currentPage;
  let items = [];
  for (let number = 1; number <= pageInfo?.lastPage; number++) {
    items.push(
      active === number && (
        <Button
          style={styles.pagination}
          size="lg"
          className="mx-1"
          key={String(number)}>
          {number}
        </Button>
      ),
      active !== number && (
        <Button
          style={styles.pagination}
          // onPress={() => getSearch((page = number), searching, category)}
          onPress={() => changePages(number)}
          size="lg"
          className="mx-1"
          colorScheme="pink"
          key={String(number)}>
          {number}
        </Button>
      ),
    );
  }

  const renderFav = ({ item }) => {
    let urlImg = {
      uri: item?.image,
    };
    // console.log(urlImg);
    return (
      <HStack space={3}>
        <Image
          rounded={15}
          source={urlImg}
          mx={'3'}
          width={'120'}
          height={'100'}
          alt="history"
        />
        <View width={'180'} height={'40'}>
          <Text bold>{item.vehicle}</Text>
          <Text>Jan 18 to 21 2022</Text>
          <Text fontSize={14} bold>
            Total Price : {item.totalPrice}
          </Text>
          <Text bold>{item.location}</Text>
        </View>
        <Pressable>
          <Center mt="3">
            <Icon color={'red'} size={30} name="trash-alt" />
          </Center>
        </Pressable>
      </HStack>
    );
  };
  return (
    <View style={styles.scroll}>
      <Center my="5">
        <Text bold mt="5" fontSize={30}>
          History Order
        </Text>
      </Center>
      <Center mb="2">
        <View style={styles.page}>{items}</View>
      </Center>
      <View mt={4}>
        {/* <Center>
          <Text my="5">A Week Ago</Text>
        </Center> */}
        <FlatList
          data={history}
          renderItem={renderFav}
          horizontal={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  line: { backgroundColor: 'lightgrey', height: 1 },
  scroll: { paddingBottom: 250 },
  pagination: { marginHorizontal: 2 },
  page: { flexDirection: 'row', marginHorizontal: 10 },
});
