import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const CounterScreen = () => {
  const [counter, setCounter] = useState(0)

  return (
    <View>
      <Button title='Increment' onPress={() => {
        setCounter(counter + 1)
      }} />
      <Button title='Decrement' onPress={() => {
        setCounter(counter - 1)
      }} />
      <Text>Current Count: {counter}</Text>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({})