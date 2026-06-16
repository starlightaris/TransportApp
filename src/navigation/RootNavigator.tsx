import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RoleSelect from '../pages/auth/RoleSelect';
import DriverRegisterStep1 from '../pages/driver/RegisterStep1';
import DriverRegisterStep2 from '../pages/driver/RegisterStep2';
import PassengerRegister from '../pages/passenger/Register';
import DriverHome from '../pages/driver/Home';
import PassengerHome from '../pages/passenger/Home';


export type RootStackParamList = {
  RoleSelect: undefined;
  DriverRegisterStep1: undefined;
  DriverRegisterStep2: { uid: string; name: string };
  PassengerRegister: undefined;
  DriverHome: undefined;
  PassengerHome: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RoleSelect">
        <Stack.Screen name="RoleSelect" component={RoleSelect} options={{ title: 'Welcome' }} />
        <Stack.Screen name="DriverRegisterStep1" component={DriverRegisterStep1} options={{ title: 'Driver Details' }} />
        <Stack.Screen name="DriverRegisterStep2" component={DriverRegisterStep2} options={{ title: 'Vehicle Details' }} />
        <Stack.Screen name="PassengerRegister" component={PassengerRegister} options={{ title: 'Passenger Sign Up' }} />
        <Stack.Screen name="DriverHome" component={DriverHome} options={{ title: 'Driver Home' }} />
        <Stack.Screen name="PassengerHome" component={PassengerHome} options={{ title: 'Passenger Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}