import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import RootNavigation from './src/router/rootNavigation'
import store  from './src/store'

const App = () => {
  return (
<Provider store={store} >
  <NavigationContainer>
    <RootNavigation />
  </NavigationContainer>
</Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container:{}
})