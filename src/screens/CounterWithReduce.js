import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useReducer } from 'react'

const CounterWithReduce = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREASE":
        return { ...state, counter: state.counter + action.payload }
      case "DECREASE":
        return { ...state, counter: state.counter - action.payload }
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, { counter: 0 })
  const { counter } = state;
  return (
    <View>
      <Button title='Increment' onPress={() => {
        dispatch({ type: 'INCREASE', payload: 1 })
      }} />
      <Button title='Decrement' onPress={() => {
        dispatch({ type: 'DECREASE', payload: 1 })
      }} />
      <Text>Current Count: {counter}</Text>
    </View>
  )
}

export default CounterWithReduce

const styles = StyleSheet.create({})