import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const ColorScreen = () => {
  const [color, setColor] = useState([])
  console.log(color)
  return (
    <View style={{ flex: 1 }}>
      <Button title='Add Color' onPress={() => {
        setColor([...color, randomRgb()])
      }} />
      <FlatList
        keyExtractor={(item) => item}
        data={color}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <View style={{ height: 100, width: 100, backgroundColor: item }} />
              <Text>{item}</Text>
            </View>
          )
        }}
      />
    </View>
  )
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  return `rgb(${red}, ${green}, ${blue})`
}

export default ColorScreen

const styles = StyleSheet.create({})