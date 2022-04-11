import FAicon from 'react-native-vector-icons/FontAwesome';
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Input,
  Text,
  FlatList,
  Image,
  Center,
  Button,
  Modal,
  FormControl,
  Select,
  Pressable,
} from 'native-base';
import { getVehicle, getFilter, getSearch } from '../src/redux/actions/vehicle';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const Search = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  let [page, setPage] = React.useState(1);
  let [location, setLocation] = React.useState('');
  let [rating, setRating] = React.useState('');
  let [sort, setSort] = React.useState('name');
  let [searching, setSearching] = React.useState('');
  let [category, setCategory] = React.useState('');
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(99999999);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const vehicle = useSelector(state => state.vehicle);
  const vehicles = useSelector(state => state.vehicle?.searched);
  const pageInfo = useSelector(state => state.vehicle?.pageSearch);
  // console.log(pageInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    getProfiler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProfiler = () => {
    dispatch(getSearch(page, location, sort, min, max, category, search));
  };

  const changePages = async number => {
    setPage(number);
    await dispatch(
      getFilter(number, location, sort, min, max, category, search),
    );
  };

  const searchPages = async number => {
    setPage(number);
    await dispatch(getFilter(1, location, sort, min, max, category, search));
  };

  const onReset = () => {
    setLocation('');
    setRating('');
    setSort('name');
    setMin(0);
    setMax(99999999);
    setCategory('');
  };

  const onApply = () => {
    setShowModal(false);
    dispatch(getFilter(1, location, sort, min, max, category, search));
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

  const [search, setSearch] = useState('');
  const searchChange = e => {
    setSearch(e);
  };

  const removeHandler = () => {
    setSearch('');
  };
  const renderItem = ({ item }) => {
    let urlImg = {
      uri: item?.image,
    };
    // console.log(urlImg);
    return (
      <View style={styles.elevate}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Reservation', {
              vehicleId: item.vehicleId,
              eventId: null,
            })
          }
          style={styles.coverImg}>
          <Image
            width={'100%'}
            height="180"
            alt={item?.location}
            source={urlImg}
            style={styles.listImg}
          />
        </TouchableOpacity>
        <View style={styles.textVehicle}>
          <Text style={styles.text}>
            Kintamani, 0.1 miles from your location
          </Text>
          <View style={styles.rows}>
            <View>
              <Text style={styles.textName}>{item?.name}</Text>
              <Text style={styles.textAvailable}>Available</Text>
            </View>
            <Text style={styles.price}>Rp. {item?.price}/Day</Text>
          </View>
        </View>
      </View>
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
                onPress={searchPages}
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
          <TouchableOpacity
            onPress={() => setShowModal(true)}
            style={styles.row}>
            <FAicon
              color={'#8D8DAA'}
              name="filter"
              size={25}
              style={styles.filter}
            />
            <Text>Filter</Text>
          </TouchableOpacity>
          <Center>
            <View style={styles.page}>{items}</View>
          </Center>
        </Box>

        <View style={styles.main}>
          <FlatList
            data={vehicles}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <Modal
          style={styles.modals}
          size={'full'}
          isOpen={showModal}
          onClose={() => setShowModal(false)}>
          <Modal.Content style={styles.modal}>
            <Modal.Header
              flexDirection={'row'}
              justifyContent="space-between"
              alignItems={'center'}>
              <Text fontSize={'24'} mx={'5'}>
                Filter
              </Text>
              <Pressable onPress={onReset}>
                <FAicon size={25} name="refresh" />
              </Pressable>
            </Modal.Header>
            <Modal.Body>
              <View>
                <View style={styles.select}>
                  <Text color={'black'} fontSize={'xl'}>
                    Your Location
                  </Text>
                  <Box w="1/4">
                    <Select
                      selectedValue={location}
                      variant="ghost"
                      minWidth="150"
                      fontSize={'20'}
                      accessibilityLabel="Choose"
                      placeholder="Choose"
                      _selectedItem={{
                        bg: 'pink.600',
                      }}
                      mt={1}
                      onValueChange={itemValue => setLocation(itemValue)}>
                      <Select.Item label="Bekasi" value="bekasi" />
                      <Select.Item label="Jakarta" value="jakarta" />
                      <Select.Item label="Bandung" value="bandung" />
                      <Select.Item label="Depok" value="depok" />
                      <Select.Item label="Bogor" value="bogor" />
                    </Select>
                  </Box>
                </View>
                <View style={styles.select}>
                  <Text color={'black'} fontSize={'xl'}>
                    Star Rating
                  </Text>
                  <Box w="1/4">
                    <Select
                      selectedValue={rating}
                      variant="ghost"
                      minWidth="150"
                      fontSize={'20'}
                      accessibilityLabel="Choose"
                      placeholder="Choose"
                      _selectedItem={{
                        bg: 'pink.600',
                      }}
                      mt={1}
                      onValueChange={itemValue => setRating(itemValue)}>
                      <Select.Item label="1" value="1" />
                      <Select.Item label="2" value="2" />
                      <Select.Item label="3" value="3" />
                      <Select.Item label="4" value="4" />
                      <Select.Item label="5" value="5" />
                    </Select>
                  </Box>
                </View>
                <View style={styles.select}>
                  <Text color={'black'} fontSize={'xl'}>
                    Sort By
                  </Text>
                  <Box w="1/4">
                    <Select
                      selectedValue={sort}
                      variant="ghost"
                      minWidth="150"
                      fontSize={'20'}
                      accessibilityLabel="Choose"
                      placeholder="Choose"
                      _selectedItem={{
                        bg: 'pink.600',
                      }}
                      mt={1}
                      onValueChange={itemValue => setSort(itemValue)}>
                      <Select.Item label="Date" value="createdAt" />
                      <Select.Item label="Price" value="price" />
                      <Select.Item label="Rating" value="rating" />
                    </Select>
                  </Box>
                </View>
                <View style={styles.select}>
                  <Text color={'black'} fontSize={'xl'}>
                    Min Price
                  </Text>
                  <View style={[styles.picker, styles.inputWrapper]}>
                    <Input
                      style={styles.input}
                      placeholderTextColor="gray"
                      placeholder="Rp"
                      keyboardType="number-pad"
                      onChangeText={setMin}
                      value={min}
                    />
                    {/* <AntIcon name="caretdown" size={10} style={styles.iconInput} /> */}
                  </View>
                </View>
                <View style={styles.select}>
                  <Text color={'black'} fontSize={'xl'}>
                    Max Price
                  </Text>
                  <View style={[styles.picker, styles.inputWrapper]}>
                    <Input
                      style={styles.input}
                      placeholderTextColor="gray"
                      placeholder="Rp"
                      keyboardType="number-pad"
                      onChangeText={setMax}
                      value={max}
                    />
                  </View>
                </View>
                {/* <View style={styles.select}>
                  <Text color={'black'} fontSize={'xl'}>
                    Date
                  </Text>
                  <View style={[styles.dates]}>
                    <TouchableOpacity
                      title={String(date)}
                      onPress={() => setOpen(true)}>
                      <Text style={styles.textBtn}>
                        {moment(date).format('MMM DD YYYY')}
                      </Text>
                    </TouchableOpacity>
                    <DatePicker
                      style={styles.datePicker}
                      fadeToColor="white"
                      theme="dark"
                      textColor="black"
                      modal
                      mode="date"
                      open={open}
                      date={date}
                      onConfirm={dateItem => {
                        setOpen(false);
                        setDate(dateItem);
                      }}
                      onCancel={() => {
                        setOpen(false);
                      }}
                    />
                    <FAicon name="calendar" size={20} style={styles.calendar} />
                  </View>
                </View> */}
                <View style={styles.select}>
                  <Text color={'black'} fontSize={'xl'}>
                    Category
                  </Text>
                  <Box w="1/4">
                    <Select
                      selectedValue={category}
                      variant="ghost"
                      minWidth="150"
                      fontSize={'20'}
                      accessibilityLabel="Choose"
                      placeholder="Choose"
                      _selectedItem={{
                        bg: 'pink.600',
                      }}
                      mt={1}
                      onValueChange={itemValue => setCategory(itemValue)}>
                      <Select.Item label="Bike" value="1" />
                      <Select.Item label="Motorbike" value="2" />
                      <Select.Item label="Car" value="3" />
                    </Select>
                  </Box>
                </View>
              </View>
            </Modal.Body>
            <Modal.Footer style={styles.modals}>
              <Button.Group space={1}>
                <Button onPress={onApply}>Apply</Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 19,
  },
  dates: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  select: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginEnd: 20,
    marginTop: 20,
  },
  modal: {
    height: 1400,
    flex: 1,
  },
  modals: {
    backgroundColor: '#FFF',
    borderColor: 'transparent',
    borderWidth: 0,
    elevation: 0,
  },
  activeMargin: { marginHorizontal: 2 },
  pagination: {
    marginHorizontal: 2,
    // backgroundColor: 'red',
  },
  page: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  main: {
    paddingHorizontal: 10,
    paddingBottom: 530,
  },
  text: {
    fontSize: 16,
    color: 'grey',
  },
  textName: {
    fontSize: 16,
    color: '#8D8DAA',
    fontWeight: 'bold',
  },
  textAvailable: {
    fontSize: 16,
    color: '#F56D91',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 25,
    color: '#F56D91',
    fontWeight: 'bold',
    paddingTop: 10,
  },
  textVehicle: {
    backgroundColor: 'pink',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 20,
    paddingTop: 8,
    paddingHorizontal: 12,
  },
  elevate: {
    marginVertical: 20,
    elevation: 5,
    borderRadius: 30,
  },
  listImg: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  coverImg: {
    elevation: 3,
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -10,
  },
});
export default Search;
