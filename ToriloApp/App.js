/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet
} from 'react-native';


import { createStackNavigator } from '@react-navigation/stack';


import { NativeBaseProvider } from 'native-base';
import Welcome from './src/screens/Welcome'
import Dashboard from './src/screens/Dashboard'
import { NavigationContainer } from '@react-navigation/native';
import Job from './src/screens/Dashboard/Jobs/Job';
const Stack = createStackNavigator();


export default class App extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    }
  }

  render() {


    return (
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={Welcome} />
            <Stack.Screen name="Home" component={Dashboard} />
            <Stack.Screen name="Job" component={Job} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>

    )

  }

};


