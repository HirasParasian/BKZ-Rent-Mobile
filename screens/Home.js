import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Title from '../src/component/Title';

const Home = () => {
  const data = [
    { id: 1, image: require('../src/assets/images/1.png') },
    { id: 2, image: require('../src/assets/images/1.png') },
    { id: 3, image: require('../src/assets/images/1.png') },
    { id: 4, image: require('../src/assets/images/1.png') },
  ];
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.coverImg}>
        <Image source={item.image} style={styles.listImg} />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <Image
          source={require('../src/assets/images/header.png')}
          style={styles.headerImg}
        />
        <View style={styles.content}>
          <Title child={'Recommended'} resChild={'View more'} />
          <FlatList
            data={data}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <Title child={'Hot Deals'} resChild={'View more'} />
          <FlatList
            data={data}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <Title child={'Cars'} resChild={'View more'} />
          <FlatList
            data={data}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <Title child={'Bike'} resChild={'View more'} />
          <FlatList
            data={data}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <Title child={'Motorbike'} resChild={'View more'} />
          <FlatList
            data={data}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    position: 'relative',
    height: '100%',
    backgroundColor: 'rgba(154, 208, 236, 0.1)',
  },
  headerImg: {
    width: '100%',
  },
  coverImg: {
    width: 300,
    marginRight: 20,
  },
  listImg: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
    margin: 20,
  },
});

export default Home;
