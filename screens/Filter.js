import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import { Button, Select } from 'native-base';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Text, FormControl, Center } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
// import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const Filter = ({ navigation }) => {
  const location = [
    'Ngawi',
    'Bandung',
    'Jakarta',
    'Yogyakarta',
    'Depok',
    'Bali',
    'Malang',
  ];
  const type = ['Motorbike', 'Car', 'Bike', 'Pickup'];

  const [selectedLocation, setSelectedLocation] = useState();
  const [selectRate, setSelectRate] = useState();
  const [sortBy, setSortBy] = useState();
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState();
  const [isPrepayment, setIsPrepayment] = useState(false);
  const [isDeal, setIsDeal] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);

  const dispatch = useDispatch();

  const handleReset = () => {
    setSelectedLocation();
    setSelectRate();
    setDate(new Date());
    setOpen(false);
    setIsPrepayment(false);
    setIsDeal(false);
    setIsAvailable(false);
    setSortBy();
  };

  const handleFilter = () => {
    const dataFilter = {
      search: selectedType || '',
      maximum: max || 0,
      minimum: min || 0,
      location: selectedLocation || '',
      sort: sortBy || '',
      prepayment: isPrepayment || '',
    };
    // dispatch(getFilter(dataFilter));
    navigation.navigate('SearchList');
  };

  return (
    <Center>
      <FormControl w="3/4" maxW="300" isRequired isInvalid>
        <FormControl.Label>Choose service</FormControl.Label>
        <Select
          minWidth="200"
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          _selectedItem={{
            bg: 'teal.600',
            // endIcon: <CheckIcon size={5} />,
          }}
          mt="1">
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
        <FormControl.ErrorMessage>
          Please make a selection!
        </FormControl.ErrorMessage>
      </FormControl>
    </Center>
  );
};

const styles = StyleSheet.create({
  // filterScreen
  backWrapper: {
    padding: 20,
    borderBottomColor: '#dcdde1',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBack: {
    marginRight: 10,
  },
  resetBtn: {
    backgroundColor: '#dcdde1',
    width: '20%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  main: {
    padding: 20,
    // flexDirection: 'column',
    // justifyContent: 'space-between',
  },
  select: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  picker: {
    width: '40%',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    paddingHorizontal: 17,
    fontSize: 16,
  },
  iconInput: {
    paddingRight: 19,
  },
  btndate: {
    backgroundColor: 'gray',
    color: 'gray',
  },
  textBtn: {
    color: 'gray',
  },
  btnWrapper: {
    marginTop: 50,
    paddingBottom: 150,
  },
});

export default Filter;
