import React from 'react'
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux'

import TaskCard from './TaskCard'
import BottomCard from './BottomCard'

const TaskItem = ({ route, item, tags, setVisibility, setSelectedItem }) => {
  const itemTags = tags.filter(x => item.tags.includes(x.id))

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
      <BottomCard tags={ itemTags } priority={ item.priority }/>
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

const mapStateToProps = state => ({
  tags: state.tags
})

export default connect(mapStateToProps)(TaskItem)
