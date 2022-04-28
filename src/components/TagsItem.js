import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import TaskCard from './TaskCard'

export default ({ route, item, setVisibility, setSelectedItem }) => {
  return (
    <TaskCard
      item={ item.id }
      //setVisibility={ setVisibility }
      //setSelectedItem={ setSelectedItem }
      route={ route }
    >
      <Feather name="tag" size={24} color={ item.color } />
      <Text style={ styles.title }>
        { item.title }
      </Text>
    </TaskCard>
    );
}

const styles = StyleSheet.create({
  title: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5, 
  }
});
