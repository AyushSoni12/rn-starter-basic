import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Home = ({ navigation: { navigate } }) => {

  return (
    <View>
      <Text>Hi There!</Text>
      <Button
        title='Go to Components Demo'
        onPress={() => navigate('ComponentDemo')}
      />
      <Button
        title='Go to List Demo'
        onPress={() => navigate('ListScreen')}
      />
      <Button
        title='Go to Image Screen'
        onPress={() => navigate('ImageScreen')}
      />
      <Button
        title='Go to Counter Screen'
        onPress={() => navigate('CounterScreen')}
      />
      <Button
        title='Go to Color Screen'
        onPress={() => navigate('ColorScreen')}
      />
      <Button
        title='Go to Square Screen'
        onPress={() => navigate('SquareScreen')}
      />
      <Button
        title='Go to Square Reduce Screen'
        onPress={() => navigate('SquareReduce')}
      />
      <Button
        title='Go to Counter Reduce Screen'
        onPress={() => navigate('CounterReduce')}
      />
      <Button
        title='Go to Text Screen'
        onPress={() => navigate('TextScreen')}
      />
      <Button
        title='Go to Box Screen'
        onPress={() => navigate('BoxScreen')}
      />
      {/* <TouchableOpacity style={styles.} onPress={() => props.navigation.navigate('ListScreen')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})