import React from 'react';
import Home from '../pages/Home/Home';
import Details from '../pages/Details/Details';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Navigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Deails" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
