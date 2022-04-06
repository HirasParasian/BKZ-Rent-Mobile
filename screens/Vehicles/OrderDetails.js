import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Stepper from '../../src/component/Stepper';
import {
  Container,
  Center,
  Button,
  Box,
  Text,
  ScrollView,
  Image,
  HStack,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FA5icon from 'react-native-vector-icons/FontAwesome5';
import Order from '../../src/assets/images/1.png';
import Back from '../../src/component/Back';

const OrderDetails = ({ navigation }) => {
  return (
    <>
      <Back name={'Order Details'} />
      <ScrollView>
        <View style={styles.content}>
          <Center py={'5'}>
            <Container>
              <Stepper count={3} currentlyActive={2} />
            </Container>
          </Center>
          <Center>
            <Image my="5" rounded={20} alt="vehicles" source={Order} />
          </Center>
          <Container my={'5'} mx={'5'}>
            <Text my={'1'} mx={'5'}>
              Order details :
            </Text>
            <Text my={'1'} mx={'5'}>
              2 Vespa
            </Text>
            <Text my={'1'} mx={'5'}>
              Prepayement (no tax)
            </Text>
            <Text my={'1'} mx={'5'}>
              4 days
            </Text>
            <Text my={'1'} mx={'5'}>
              Jan 18 2021 to Jan 22 2021
            </Text>
          </Container>
          <HStack
            space={2}
            pb={'5'}
            mx={'5'}
            // justifyContent="screen-between"
            alignItems={'center'}>
            <Text bold fontSize={'4xl'} mx={'5'}>
              Rp. 245.000
            </Text>
            <FA5icon size={40} name="info-circle" />
          </HStack>
          <Center>
            <Button
              onPress={() => navigation.navigate('PaymentCode')}
              w="80%"
              my={'1'}
              py={'4'}
              rounded={10}
              style={styles.Button}
              colorScheme={'pink'}
              variant="subtle">
              <Text bold>Get Payment Code</Text>
            </Button>
          </Center>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  content: { paddingBottom: 70 },
  Button: {
    backgroundColor: '#8D8DAA',
    opacity: 0.8,
  },
  back: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
});

export default OrderDetails;
