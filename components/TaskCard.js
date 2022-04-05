import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import BottomCard from '../components/BottomCard'

export default(props) => {
  const { todo } = props

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => alert('Pressed!')}
      style={ styles.card }
    >
      <Text style={ styles.title }>
        { todo.title }
      </Text>
      <Text style={ styles.body }>
        { todo.description }
      </Text>
      <BottomCard tags={ todo.tags } priority={ todo.priority }/>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginTop: 16,
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
