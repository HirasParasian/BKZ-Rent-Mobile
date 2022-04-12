import { StyleSheet } from 'react-native';
import http from '../src/helpers/http';
import qs from 'qs';
import {
  Text,
  View,
  Center,
  Image,
  HStack,
  Pressable,
  FlatList,
  Modal,
  Button,
  useToast,
} from 'native-base';
import React from 'react';
import emptys from '../src/assets/images/empty.png';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHistory, getMyHistory } from '../src/redux/actions/history';
import Icon from 'react-native-vector-icons/FontAwesome5';
const History = ({ navigation }) => {
  const toast = useToast();
  let [showModal, setShowModal] = React.useState(false);
  let [idHistory, setIdHistory] = React.useState();
  let [page, setPage] = React.useState(1);
  const auth = useSelector(state => state.auth);
  const pageInfo = useSelector(state => state.history?.historyPage);
  const history = useSelector(state => state.history.myHistory);
  const empty = useSelector(state => state.history);
  // console.log('----------------------' + empty.errMsg);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getMyHistory(auth.token, 1));
  }, [auth.token, dispatch]);
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
          colorScheme="primary"
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
        <Pressable
          onPress={() =>
            navigation.navigate('DetailHistory', {
              historyId: item.historyId,
              eventId: null,
            })
          }>
          <Image
            rounded={15}
            source={urlImg}
            mx={'3'}
            width={'120'}
            height={'100'}
            alt="history"
          />
        </Pressable>
        <View width={'180'} height={'40'}>
          <Text bold>{item?.vehicle}</Text>
          <Text>Jan 18 to 21 2022</Text>
          <Text fontSize={14} bold>
            Total Price : {item?.totalPrice}
          </Text>
          <Text bold>{item?.location}</Text>
        </View>
        <Pressable
          width={'30'}
          height={'40'}
          onPress={() => onTrash(item?.historyId)}>
          <Center mt="3">
            <Icon color={'red'} size={30} name="trash-alt" />
          </Center>
        </Pressable>
      </HStack>
    );
  };

  const onTrash = async historyId => {
    setShowModal(true);
    setIdHistory(historyId);
    // console.log(historyId);
  };

  const onDel = async event => {
    event.preventDefault();
    dispatch(deleteHistory(idHistory));
    dispatch({
      type: 'CLEAR_HISTORY',
    });
    dispatch(getMyHistory(auth.token, 1));
    setShowModal(false);
    toast.show({
      description: 'Delete Succesfully',
      duration: 2,
    });
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
        {!empty.isError && (
          <FlatList
            data={history}
            renderItem={renderFav}
            horizontal={false}
            showsVerticalScrollIndicator={false}
          />
        )}
        {empty.isError && (
          <>
            <Center>
              <Image
                source={emptys}
                width={'80%'}
                height={'80%'}
                alt="history"
              />
            </Center>
            <Center>
              <Text fontSize={40} bold>
                Empty History
              </Text>
            </Center>
          </>
        )}
      </View>
      <Center>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px" py="5">
            <Modal.Body>
              <Center px="5" mx="5">
                <Text bold>Are you sure to delete the </Text>
                <Text bold>selected history?</Text>
              </Center>
            </Modal.Body>

            <Center pt="5" style={styles.page2}>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}>
                Cancel
              </Button>
              <Button colorScheme="pink" onPress={onDel}>
                Delete
              </Button>
            </Center>
          </Modal.Content>
        </Modal>
      </Center>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  line: { backgroundColor: 'lightgrey', height: 1 },
  scroll: { paddingBottom: 320 },
  pagination: { marginHorizontal: 2 },
  page: { flexDirection: 'row', marginHorizontal: 10 },
  page2: { flexDirection: 'row', justifyContent: 'space-evenly' },
});
