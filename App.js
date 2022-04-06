import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import { extendTheme, NativeBaseProvider } from 'native-base';
import pushNotif from 'react-native-push-notification';
pushNotif.createChannel({
  channelId: 'testId',
  channelName: 'TestingName',
  playSound: false,
});
//--------------IMPORT SCREEN--------------------------------------
//AUTH
import Login from './screens/Login';
import Signup from './screens/Signup';
import ForgotPassword from './screens/ForgotPassword';
//HOME
import Home from './screens/Home';
import Reservation from './screens/Vehicles/Reservation';
import Bike from './screens/Vehicles/Bike';
import Cars from './screens/Vehicles/Cars';
import Motorbike from './screens/Vehicles/Motorbike';
import Payment from './screens/Vehicles/Payment';
import PaymentCode from './screens/Vehicles/PaymentCode';
import OrderDetails from './screens/Vehicles/OrderDetails';
import FinishPayment from './screens/Vehicles/FinishPayment';
import CreateVehicle from './screens/Vehicles/CreateVehicle';
//PROFILE
import Profile from './screens/Profile';
import FAQ from './screens/Profile/FAQ';
import Help from './screens/Profile/Help';
import MyFavorite from './screens/Profile/MyFavorite';
import UpdatePassword from './screens/Profile/UpdatePassword';
import UpdateProfile from './screens/Profile/UpdateProfile';
//HISTORY
import History from './screens/History';
//SEARCH
import Search from './screens/Search';
//-------------END IMPORT SCREEN-----------------------------------

//-------------PERSIST INTEGRATION---------------------------------
import reduxStore from './src/redux/store';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
//-------------END PERSIST INTEGRATION-----------------------------
const theme = extendTheme({
  colors: {
    brand: {
      100: '#8D8DAA',
      200: '#DFDFDE',
      300: '#F7F5F2',
      400: '#F56D91',
    },
    primary: {
      // 50: '#E3F2F9',
      // 100: '#C5E4F3',
      // 200: '#A2D4EC',
      // 300: '#7AC1E4',
      // 400: '#47A9DA',
      // 500: '#0088CC',
      600: '#8D8DAA',
      700: '#DFDFDE',
      800: '#F7F5F2',
      900: '#F56D91',
    },
    // Redefinig only one shade, rest of the color will remain same.
    amber: {
      400: '#d97706',
    },
  },
  // config: {
  //   // Changing initialColorMode to 'dark'
  //   initialColorMode: 'dark',
  // },
});

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarColor="#F56D91"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#F56D91',
          bottom: 10,
          left: 10,
          right: 10,
          borderRadius: 15,
          paddingTop: 10,
        },
      }}>
      <Tab.Screen
        name="Homes"
        component={Homes}
        options={{
          tabBarLabel: '',
          tabBarActiveTintColor: '#8D8DAA',
          tabBarInactiveTintColor: '#F7F5F2',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '',
          tabBarActiveTintColor: '#8D8DAA',
          tabBarInactiveTintColor: '#F7F5F2',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="testing"
        component={History}
        options={{
          tabBarLabel: '',
          tabBarActiveTintColor: '#8D8DAA',
          tabBarInactiveTintColor: '#F7F5F2',
          tabBarIcon: ({ color }) => (
            <Ionicons name="sticker-text-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profiles"
        component={Profiles}
        options={{
          tabBarLabel: '',
          tabBarActiveTintColor: '#8D8DAA',
          tabBarInactiveTintColor: '#F7F5F2',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Auth() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
function Profiles() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="MyFavorite" component={MyFavorite} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
    </Stack.Navigator>
  );
}

function Homes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Bike" component={Bike} />
      <Stack.Screen name="Cars" component={Cars} />
      <Stack.Screen name="Motorbike" component={Motorbike} />
      <Stack.Screen name="CreateVehicle" component={CreateVehicle} />
    </Stack.Navigator>
  );
}

function Main() {
  const auth = useSelector(state => state.auth);
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {auth.token === null && <Stack.Screen name="Auth" component={Auth} />}
          {auth.token !== null && (
            <Stack.Screen name="BottomTab" component={MyTabs} />
          )}
          <Stack.Screen name="Reservation" component={Reservation} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="PaymentCode" component={PaymentCode} />
          <Stack.Screen name="OrderDetails" component={OrderDetails} />
          <Stack.Screen name="FinishPayment" component={FinishPayment} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const { store, persistor } = reduxStore();

export default function App() {
  // const getTokens = async () => {
  //   const token = await messaging().getToken();
  //   console.log('Token Notif = ' + token);
  // };
  // useEffect(() => {
  //   getTokens();
  // }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}
const styles = StyleSheet.create({
  // tabNavigator: {
  //   padding: 20,
  // },
});
