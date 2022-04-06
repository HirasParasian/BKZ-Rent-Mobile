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

const MyFavorite = () => {
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
  const bike = useSelector(state => state.vehicle?.bike);
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
        <HStack space={3}>
          <Image
            rounded={15}
            source={ImageThumb}
            mx={'3'}
            my="5"
            width={'120'}
            height={'100'}
            alt="history"
          />
          <View width={'180'} my="5" height={'40'}>
            <Text bold>Vespa Matic</Text>
            <Text>Jan 18 to 21 2022</Text>
            <Text fontSize={14} bold>
              Prepayment : Rp. 245.000
            </Text>
            <Text bold>Kintamani, Bali</Text>
          </View>
          <Pressable
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
        {/* <FlatList
          data={bike}
          renderItem={renderBike}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default MyFavorite;
