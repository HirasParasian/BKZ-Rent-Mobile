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
} from 'native-base';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Back from '../../src/component/Back';
import { deleteFavorite, getMyFavorite } from '../../src/redux/actions/auth';
import Love from 'react-native-vector-icons/AntDesign';

const MyFavorite = ({ navigation }) => {
  const toast = useToast();
  const auth = useSelector(state => state.auth);
  const pageInfo = useSelector(state => state.auth?.pageFavorite);
  const favorite = useSelector(state => state.auth?.myFavorite);
  let [showModal, setShowModal] = React.useState(false);
  let [idHistory, setIdHistory] = React.useState();
  let [page, setPage] = React.useState(1);
  React.useEffect(() => {
    dispatch(getMyFavorite(auth.token, page));
  }, [auth.token, dispatch, page]);
  const dispatch = useDispatch();
  const renderFav = ({ item }) => {
    let urlImg = {
      uri: item?.image,
    };
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
          <Text bold>{item.name}</Text>
          <Text>Jan 18 to 21 2022</Text>
          <Text fontSize={14} bold>
            Price : {item.price}
          </Text>
          <Text bold>{item.location}</Text>
        </View>
        <View style={styles.loves}>
          <Pressable
            // onPress={() =>
            //   navigation.navigate('Reservation', {
            //     vehicleId: item.vehicleId,
            //     eventId: null,
            //   })
            // }
            width={'10'}
            mb="1"
            height={'100'}
            // alignItems={'center'}
            justifyContent={'center'}>
            <Center>
              <Love color={'pink'} size={30} name="heart" />
            </Center>
          </Pressable>
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
    <View>
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
      <View>
        <FlatList data={favorite} renderItem={renderFav} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  line: { backgroundColor: 'lightgrey', height: 1 },
  scroll: { paddingBottom: 250 },
  pagination: { marginHorizontal: 2 },
  page: { flexDirection: 'row', marginHorizontal: 10 },
  page2: { flexDirection: 'row', justifyContent: 'space-evenly' },
});
export default MyFavorite;
