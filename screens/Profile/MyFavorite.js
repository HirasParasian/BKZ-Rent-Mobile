import { StyleSheet } from 'react-native';
import {
  View,
  Text,
  Center,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  HStack,
  Pressable,
} from 'native-base';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Back from '../../src/component/Back';
import ImageThumb from '../../src/assets/images/1.png';
import Love from 'react-native-vector-icons/AntDesign';

const MyFavorite = ({ navigation }) => {
  // const renderBike = ({ item }) => {
  //   let urlImg = {
  //     uri: item?.image,
  //   };
  //   // console.log(urlImg);
  //   return (
  //     <TouchableOpacity style={styles.coverImg}>
  //       <Image
  //         width={'100%'}
  //         height="180"
  //         alt={'image'}
  //         source={urlImg}
  //         style={styles.listImg}
  //       />
  //     </TouchableOpacity>
  //   );
  // };
  const favorite = useSelector(state => state.auth?.myFavorite);
  console.log('-------------------' + favorite[0].name);

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
          <Text bold>{item.name}</Text>
          <Text>Jan 18 to 21 2022</Text>
          <Text fontSize={14} bold>
            Price : {item.price}
          </Text>
          <Text bold>{item.location}</Text>
        </View>
        <Pressable
          // onPress={() =>
          //   navigation.navigate('Reservation', {
          //     vehicleId: item.vehicleId,
          //     eventId: null,
          //   })
          // }
          width={'10'}
          my="5"
          height={'100'}
          alignItems={'center'}
          justifyContent={'center'}>
          <Center>
            <Love color={'pink'} size={25} name="heart" />
          </Center>
        </Pressable>
      </HStack>
    );
  };
  return (
    <View>
      <View>
        <Back name={'My Favorite'} />
      </View>
      <ScrollView>
        <View>
          <Center>Tap love to unlike</Center>
        </View>
      </ScrollView>
      <View>
        <FlatList
          data={favorite}
          renderItem={renderFav}
          // horizontal={false}
          // showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default MyFavorite;
