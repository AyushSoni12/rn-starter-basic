import React from 'react';
import { View, Text, StyleSheet, FlatList, StatusBar } from 'react-native';


const ListScreen = () => {

  const data = [
    { id: 1, name: 'Friend#1', age: 20 },
    { id: 2, name: 'Friend#2', age: 20 },
    { id: 3, name: 'Friend#3', age: 20 },
    { id: 4, name: 'Friend#4', age: 20 },
    { id: 5, name: 'Friend#5', age: 20 },
    { id: 6, name: 'Friend#6', age: 20 },
    { id: 7, name: 'Friend#7', age: 20 },
    { id: 8, name: 'Friend#8', age: 20 },
    { id: 9, name: 'Friend#9', age: 20 },
    { id: 10, name: 'Friend#10', age: 21 },
    { id: 11, name: 'Friend#11', age: 21 },
    { id: 12, name: 'Friend#12', age: 21 },
    { id: 13, name: 'Friend#13', age: 21 },
    { id: 14, name: 'Friend#14', age: 21 },
  ]

  const renderItem = ({ item, index }) => {
    return (
      <Text style={styles.list}>{item?.name} - Age {item?.age}</Text>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <Text>Hello World</Text>

      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(key) => key.id}
        renderItem={renderItem}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    backgroundColor: 'pink',
    padding: 20,
    marginBottom: 20
  }
})

export default ListScreen;