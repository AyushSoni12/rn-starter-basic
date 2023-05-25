import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const BoxScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>BoxScreen</Text>
      <TouchableOpacity style={styles.touchable}>
        <Text>Touchable</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BoxScreen

const styles = StyleSheet.create({
  view: {
    borderWidth: 4,
    borderColor: 'red',
    flexDirection: 'row',
    height: 200
  },
  text: {
    borderWidth: 1,
    borderColor: 'black',
  },
  touchable: {
    borderColor: 'yellow',
    borderWidth: 2,
  }
})