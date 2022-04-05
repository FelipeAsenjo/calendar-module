import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import BottomCard from '../components/BottomCard'

export default(item) => {

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => alert('Pressed!')}
      style={ styles.card }
    >
      <Text style={ styles.title }>
        { item.title }
      </Text>
      <Text style={ styles.body }>
        { item.description }
      </Text>
      <BottomCard tags={ item.tags } priority={ item.priority }/>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginTop: 12,
    marginHorizontal: 12,
    padding: 12,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5, 
  },
  body: {
    marginBottom: 10
  }
});
