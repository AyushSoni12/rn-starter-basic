import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const TextScreen = () => {
  const [name, setName] = useState('')
  console.log(name)
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={setName}
      />
      {name.length < 8 && <Text>Your password must be 8 characters long.</Text>}
    </View>
  )
}

export default TextScreen

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingVertical: 5,
    margin: 20
  }
})