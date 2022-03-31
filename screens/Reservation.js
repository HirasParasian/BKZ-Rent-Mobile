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
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import FAicon from 'react-native-vector-icons/FontAwesome';
import ADicon from 'react-native-vector-icons/AntDesign';
import IONicon from 'react-native-vector-icons/Ionicons';

const Reservation = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <Image
          source={require('../src/assets/images/header.png')}
          style={styles.headerImg}
        />
        <View style={styles.back}>
          <View style={styles.love}>
            <View style={styles.left}>
              <TouchableOpacity>
                <FontAwesome size={40} color="#F56D91" name="chevron-left" />
              </TouchableOpacity>
            </View>
            <View style={styles.right}>
              <TouchableOpacity style={styles.rating}>
                <Text>4.5</Text>
                <ADicon size={23} color="#8D8DAA" name="star" />
              </TouchableOpacity>
              <TouchableOpacity>
                <FAicon size={40} color="#F56D91" name="heart-o" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.rows}>
            <View>
              <Text style={styles.name}>Sepeda Lipat</Text>
              <Text style={styles.price}>Rp. 99.999/day</Text>
            </View>
            <View>
              <TouchableOpacity>
                <IONicon size={40} color="#F56D91" name="chatbubble-outline" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.desc}>
            <Text style={styles.tetxDesc}>Max for 2 person</Text>
            <Text style={styles.tetxDesc}>No Prepayment</Text>
            <Text style={styles.ready}>Available</Text>
          </View>
          <View style={styles.ion}>
            <View style={styles.rows}>
              <View style={styles.ionicon}>
                <IONicon size={35} color="#F56D91" name="location-sharp" />
              </View>
              <Text style={styles.textLoc}>
                Jalan Maliboboro, No. 21, Yogyakarta
              </Text>
            </View>
            <View style={styles.rows}>
              <View style={styles.ionicons}>
                <FontAwesome size={35} color="#F56D91" name="walking" />
              </View>
              <Text style={styles.textLoc}>3.2 miles from your location</Text>
            </View>
          </View>
          <View style={styles.selectRow}>
            <Text style={styles.select}>Select Bikes</Text>
            <TouchableOpacity>
              <FontAwesome
                style={styles.plus}
                size={25}
                color="#FFF"
                name="minus"
              />
            </TouchableOpacity>
            <Text style={styles.count}>0</Text>
            <TouchableOpacity>
              <FontAwesome
                style={styles.plus}
                size={25}
                color="#FFF"
                name="plus"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  count: {
    fontSize: 30,
  },
  plus: {
    backgroundColor: '#8D8DAA',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  selectRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textLoc: {
    marginVertical: 15,
    marginHorizontal: 10,
    fontSize: 16,
  },
  select: {
    fontWeight: 'bold',
    color: '#8D8DAA',
    fontSize: 16,
    marginVertical: 15,
  },
  ion: {
    alignItems: 'flex-start',
  },
  ionicon: {
    backgroundColor: 'rgba(245, 109, 145, 0.3)',
    width: 50,
    height: 50,
    paddingLeft: 8,
    paddingTop: 5,
    borderRadius: 10,
    marginVertical: 5,
  },
  ionicons: {
    backgroundColor: 'rgba(245, 109, 145, 0.3)',
    width: 50,
    height: 50,
    paddingLeft: 12,
    paddingTop: 5,
    borderRadius: 10,
    marginVertical: 5,
  },
  tetxDesc: {
    fontWeight: '400',
    marginVertical: 3,
  },
  ready: {
    color: '#8D8DAA',
    fontWeight: '600',
    fontSize: 16,
  },
  desc: {
    marginVertical: 15,
  },
  container: {
    backgroundColor: '#F7F5F2',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#8D8DAA',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8D8DAA',
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rating: {
    backgroundColor: '#F56D91',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginRight: 10,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  right: {
    flexDirection: 'row',
  },
  love: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  back: {
    position: 'absolute',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  screen: {
    height: '100%',
    backgroundColor: '#DFDFDE',
  },
  headerImg: {
    width: '100%',
    position: 'relative',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});

export default Reservation;
