import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
function MyTabs(children) {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={children} />
      <Tab.Screen name="Settings" component={children} />
    </Tab.Navigator>
  );
}
export default MyTabs;
