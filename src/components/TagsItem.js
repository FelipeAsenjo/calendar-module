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
      style={ styles.container }
    >
      <Feather name="tag" size={24} color={ item.color } />
      <Text style={ styles.title }>
        { item.title }
      </Text>
    </TaskCard>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: '100%'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5, 
  }
});
