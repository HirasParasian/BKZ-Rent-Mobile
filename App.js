import * as React from 'react';
//Import Screen
import Profile from './screens/Profile';
import Home from './screens/Home';
import Reservation from './screens/Vehicles/Reservation';
import History from './screens/History';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Search from './screens/Search';
import ForgotPassword from './screens/ForgotPassword';
import FAQ from './screens/Profile/FAQ';
import Help from './screens/Profile/Help';
import MyFavorite from './screens/Profile/MyFavorite';
import UpdatePassword from './screens/Profile/UpdatePassword';
import UpdateProfile from './screens/Profile/UpdateProfile';
import Bike from './screens/Vehicles/Bike';
//End Import Screen
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import { extendTheme, NativeBaseProvider } from 'native-base';

//Persist Intergration
import reduxStore from './src/redux/store';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
//Persist
const newColorTheme = {
  brand: {
    100: '#8D8DAA',
    200: '#DFDFDE',
    300: '#F7F5F2',
    400: '#F56D91',
  },
};
const theme = extendTheme({ colors: newColorTheme });

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
        name="Home"
        component={Home}
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
      initialRouteName="Home">
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

function Vehicles() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home">
      <Stack.Screen name="Bike" component={Bike} />
      <Stack.Screen name="Reservation" component={Reservation} />
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
          <Stack.Screen name="BottomTab" component={MyTabs} />
          <Stack.Screen name="Vehicles" component={Vehicles} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const { store, persistor } = reduxStore();

export default function App() {
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
