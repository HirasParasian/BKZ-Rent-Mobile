/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import UpdateProfile from './screens/Profile';
import Home from './screens/Home';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

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
          marginRight: 20,
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
        component={Notifications}
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
        component={Profile}
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
        name="Profile"
        component={UpdateProfile}
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

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // tabNavigator: {
  //   padding: 20,
  // },
});
