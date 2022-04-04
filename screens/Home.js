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
import { Button, Center } from 'native-base';
import Title from '../src/component/Title';

const Home = ({ navigation }) => {
  const data = [
    { id: 1, image: require('../src/assets/images/1.png') },
    { id: 2, image: require('../src/assets/images/1.png') },
    { id: 3, image: require('../src/assets/images/1.png') },
    { id: 4, image: require('../src/assets/images/1.png') },
  ];
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        // onPress={() => navigation.navigate('Reservation')}
        style={styles.coverImg}>
        <Image source={item.image} style={styles.listImg} />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={styles.scroll}>
        <View>
          <Center>
            <Image
              source={require('../src/assets/images/header.png')}
              style={styles.headerImg}
            />
            <Button
              onPress={() => navigation.navigate('CreateVehicle')}
              w="80%"
              style={styles.addItem}>
              <Text style={styles.textAdd}>Add New Item</Text>
            </Button>
          </Center>
        </View>
        <View style={styles.content}>
          <View style={styles.box}>
            <Title child={'Recommended'} resChild={'View more'} />
            <FlatList
              data={data}
              renderItem={renderItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.box}>
            <Title child={'Hot Deals'} resChild={'View more'} />
            <FlatList
              data={data}
              renderItem={renderItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.box}>
            <Title
              onPress={() =>
                navigation.navigate('Cars', { screen: 'Vehicles' })
              }
              child={'Cars'}
              resChild={'View more'}
            />
            <FlatList
              data={data}
              renderItem={renderItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.box}>
            <Title
              onPress={() =>
                navigation.navigate('Bike', { screen: 'Vehicles' })
              }
              child={'Bike'}
              resChild={'View more'}
            />
            <FlatList
              data={data}
              renderItem={renderItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.box}>
            <Title
              onPress={() =>
                navigation.navigate('Motorbike', { screen: 'Vehicles' })
              }
              child={'Motorbike'}
              resChild={'View more'}
            />
            <FlatList
              data={data}
              renderItem={renderItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: 65,
  },
  box: {
    margin: 10,
    paddingRight: 15,
    backgroundColor: '#F7F5F2',
    borderRadius: 30,
    elevation: 3,
  },
  screen: {
    position: 'relative',
    height: '100%',
    backgroundColor: '#DFDFDE',
  },
  textAdd: {
    fontSize: 30,
    padding: 5,
  },
  addItem: {
    backgroundColor: '#DFDFDE',
    position: 'absolute',
    borderRadius: 20,
  },
  headerImg: {
    width: '100%',
    position: 'relative',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
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
