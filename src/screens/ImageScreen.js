import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title='Forest' imageSource={require('../../assets/forest.jpg')} score={9} />
      <ImageDetail title='Beach' imageSource={require('../../assets/beach.jpg')} score={5} />
      <ImageDetail title='Mountain' imageSource={require('../../assets/mountain.jpg')} score={10} />
    </View>
  )
}

export default ImageScreen

const styles = StyleSheet.create({})