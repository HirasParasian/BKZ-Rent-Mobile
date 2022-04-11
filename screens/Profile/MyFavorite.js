import { StyleSheet } from 'react-native';
import {
  View,
  Text,
  Center,
  ScrollView,
  Image,
  FlatList,
  HStack,
  Pressable,
  useToast,
  Button,
  Modal,
} from 'native-base';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import emptys from '../../src/assets/images/empty2.png';
import Back from '../../src/component/Back';
import { deleteFavorite, getMyFavorite } from '../../src/redux/actions/auth';
import Love from 'react-native-vector-icons/AntDesign';

const MyFavorite = ({ navigation }) => {
  const toast = useToast();
  const auth = useSelector(state => state.auth);
  const pageInfo = useSelector(state => state.auth?.pageFavorite);
  const favorite = useSelector(state => state.auth?.myFavorite);
  let [showModal, setShowModal] = React.useState(false);
  let [idFavorite, setIdFavorite] = React.useState();
  let [page, setPage] = React.useState(1);
  React.useEffect(() => {
    dispatch(getMyFavorite(auth.token, page));
  }, [auth.token, dispatch, page]);
  const dispatch = useDispatch();

  const onTrash = async id => {
    setShowModal(true);
    setIdFavorite(id);
    console.log(id);
  };
  const onDel = async event => {
    event.preventDefault();
    dispatch(deleteFavorite(idFavorite));
    dispatch({
      type: 'CLEAR_FAVORITE',
    });
    dispatch(getMyFavorite(auth.token, page));
    setShowModal(false);
    toast.show({
      description: 'Delete Succesfully',
      duration: 2,
    });
  };
  const renderFav = ({ item }) => {
    let urlImg = {
      uri: item?.image,
    };
    return (
      <HStack space={3}>
        <Pressable
          onPress={() =>
            navigation.navigate('Reservation', {
              vehicleId: item.vehicleId,
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
          <Text bold>{item.name}</Text>
          <Text>Jan 18 to 21 2022</Text>
          <Text fontSize={14} bold>
            Price : {item.price}
          </Text>
          <Text bold>{item.location}</Text>
        </View>
        <View style={styles.loves}>
          <Pressable
            width={'30'}
            height={'60'}
            onPress={() => onTrash(item?.id)}
            mb="1"
            // alignItems={'center'}
            justifyContent={'center'}>
            <Center>
              <Love color={'pink'} size={30} name="heart" />
            </Center>
          </Pressable>
          <View>
            <Center>
              <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px" py="5">
                  <Modal.Body>
                    <Center px="5" mx="5">
                      <Text bold>Are you sure to delete the </Text>
                      <Text bold>selected Favorite?</Text>
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
        </View>
      </HStack>
    );
  };

  const changePages = async number => {
    setPage(number);
    await dispatch(getMyFavorite(auth.token, number));
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

  return (
    <View style={styles.scroll}>
      <View>
        <Back name={'My Favorite'} />
      </View>
      <Center mb="2">
        <View style={styles.page}>{items}</View>
      </Center>
      <View>
        <Center pb="2">Tap love to unlike</Center>
      </View>
      <ScrollView />
      {!auth.favError && (
        <View>
          <FlatList data={favorite} renderItem={renderFav} />
        </View>
      )}
      {auth.favError && (
        <>
          <Center>
            <Image source={emptys} width={'70%'} height={'70%'} alt="history" />
          </Center>
          <Center>
            <Text fontSize={40} bold>
              Empty Favorite
            </Text>
          </Center>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  line: { backgroundColor: 'lightgrey', height: 1 },
  scroll: { paddingBottom: 300 },
  pagination: { marginHorizontal: 2 },
  page: { flexDirection: 'row', marginHorizontal: 10 },
  page2: { flexDirection: 'row', justifyContent: 'space-evenly' },
});
export default MyFavorite;
