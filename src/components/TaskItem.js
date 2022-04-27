import React from 'react'
import { StyleSheet, Text } from 'react-native';

import TaskCard from './TaskCard'
import BottomCard from './BottomCard'

export default ({ route, item, setVisibility, setSelectedItem }) => {
  return (
    <TaskCard
      item={ item.id }
      setVisibility={ setVisibility }
      setSelectedItem={ setSelectedItem }
      route={ route }
    >
      <Text style={ styles.title }>
        { item.title }
      </Text>
      { item.description.trim() !== '' && 
        <Text style={ styles.body }>
          { item.description }
        </Text> }
      <BottomCard tags={ item.tags } priority={ item.priority }/>
    </TaskCard>
    );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5, 
  },
  body: {
    marginBottom: 10,
    paddingRight: 20
  }
});
