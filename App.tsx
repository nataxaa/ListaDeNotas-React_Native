import { StatusBar } from 'expo-status-bar';
import { JSXElementConstructor } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {CartContextProvider} from './src/context/cart'

import MainTab from './src/navigators/MainTab'


export default function App() {
  return (
    <NavigationContainer>
      <CartContextProvider>
        <MainTab/>
      </CartContextProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
