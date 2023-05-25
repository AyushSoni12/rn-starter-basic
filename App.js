import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RootNavigation from './src/navigation/root-navigation'

const App = () => {
  return (
    <View style={styles.container}>
      <RootNavigation />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})