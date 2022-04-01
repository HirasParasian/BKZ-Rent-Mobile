import FAicon from 'react-native-vector-icons/FontAwesome';
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Box, Input, Text, FlatList, Image, Center } from 'native-base';

const Search = ({ navigation }) => {
  const data = [
    {
      image: require('../src/assets/images/1.png'),
      location: 'Makassar',
      price: 250000,
      title: 'Vespa Matic',
      isAvailable: true,
    },
    {
      image: require('../src/assets/images/1.png'),
      location: 'Makassar',
      price: 250000,
      title: 'Vespa Matic',
      isAvailable: true,
    },
    {
      image: require('../src/assets/images/1.png'),
      location: 'Makassar',
      price: 250000,
      title: 'Vespa Matic',
      isAvailable: true,
    },
    {
      image: require('../src/assets/images/1.png'),
      location: 'Makassar',
      price: 250000,
      title: 'Vespa Matic',
      isAvailable: true,
    },
    {
      image: require('../src/assets/images/1.png'),
      location: 'Makassar',
      price: 250000,
      title: 'Vespa Matic',
      isAvailable: true,
    },
    {
      image: require('../src/assets/images/1.png'),
      location: 'Makassar',
      price: 250000,
      title: 'Vespa Matic',
      isAvailable: true,
    },
  ];
  const [search, setSearch] = useState('');
  const searchChange = e => {
    setSearch(e);
  };

  const removeHandler = () => {
    setSearch('');
  };
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.coverImg}>
        <Image
          width={'100%'}
          alt={item.location}
          source={item.image}
          style={styles.listImg}
        />
        <Center>Kintamani, 0.1 miles from your location</Center>
        <View style={styles.rows}>
          <View>
            <Text>{item.title}</Text>
            <Text>Available</Text>
          </View>
          <Text>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <View>
        <Box style={styles.line} w="100%" px="5" py="3">
          <Input
            w="100%"
            backgroundColor={'rgba(245, 109, 145, 0.3)'}
            _focus={{ borderColor: 'red.400' }}
            style={styles.inputSearch}
            value={search}
            onChangeText={searchChange}
            placeholder="Search Vehicle"
            placeholderTextColor={'#8D8DAA'}
            InputLeftElement={
              <FAicon
                color={'#8D8DAA'}
                name="search"
                size={20}
                style={styles.search}
              />
            }
            InputRightElement={
              search ? (
                <FAicon
                  onPress={removeHandler}
                  color={'#F56D91'}
                  name="remove"
                  size={16}
                  style={styles.delete}
                />
              ) : null
            }
          />
          <TouchableOpacity style={styles.rows}>
            <FAicon
              color={'#8D8DAA'}
              name="filter"
              size={25}
              style={styles.filter}
            />
            <Text>Filter</Text>
          </TouchableOpacity>
        </Box>
        <Box px="5">
          <FlatList
            data={data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </Box>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  listImg: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 3,
  },
  coverImg: {
    // elevation: 1,
    paddingVertical: 10,
  },
  search: {
    marginLeft: 16,
  },
  delete: {
    marginRight: 16,
  },
  line: {
    borderBottomColor: '#F5F5F5',
  },
  filter: {
    marginVertical: 15,
    marginEnd: 10,
  },
  rows: {
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default Search;
