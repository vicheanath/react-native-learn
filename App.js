import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home'
import DetailsScreen from './screens/Details'
import Slide from './screens/Slide/Slide'

const Stack = createStackNavigator();

function App() {
  const nav = [
    {
      name: 'Home',
      component: HomeScreen
    },
    {
      name: 'Details',
      component: DetailsScreen
    },
    {
      name: 'Slide',
      component: Slide
    }
  ]
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {
          nav.map((val, id) => 
            <Stack.Screen key={id} name={val.name}component={val.component} />
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;