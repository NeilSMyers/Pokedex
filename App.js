import React from 'react';

import Home from "./Home"
import PokemonDetails from './PokemonDetails';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name='Pokedex' component={Home} />
        <Screen name="PokemonDetails" component={PokemonDetails} />
      </Navigator>
    </NavigationContainer>
  );
}
