import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Slide, Home, Details } from './screens'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode={false}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Slide" component={Slide} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;