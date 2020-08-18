import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Stores from '~/pages/Stores';
import Profile from '~/pages/Profile';

const stackRoutes = [
  { name: 'SignIn', component: SignIn },
  { name: 'SignUp', component: SignUp },
];

const tabRoutes = [
  { name: 'Stores', component: Stores },
  { name: 'Profile', component: Profile },
];

const globalOptionsTab = {
  unmountOnBlur: true,
  keyboardHidesTabBar: true,
  activeTintColor: '#fff',
  inactiveTintColor: '#bbb',
  style: {
    backgroundColor: '#225130',
    borderTopWidth: 0,
  },
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#225130" />
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={globalOptionsTab}>
          {tabRoutes.map(({ name, component }) => (
            <Tab.Screen
              key={name}
              name={name}
              component={component}
              options={(options) => ({
                ...globalOptionsTab,
                ...(component.navigationOptions
                  ? component.navigationOptions(options)
                  : {}),
              })}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export function SignRoutes() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#225130" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn" headerMode="none">
          {stackRoutes.map(({ name, component }) => (
            <Stack.Screen key={name} name={name} component={component} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
