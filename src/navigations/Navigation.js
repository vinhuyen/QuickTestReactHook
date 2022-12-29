import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screen/Test';
import Profile from '../screen/Profile';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Dzinh Yen nhan cach 1'} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
