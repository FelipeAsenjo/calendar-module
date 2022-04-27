import React, { useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { useTheme } from '@react-navigation/native';

import CustomView from '../components/CustomView'
import TaskItem from '../components/TaskItem'

const Routine = ({ route, data }) => {
  const { colors } = useTheme()

  const routines = data.filter(x => x.hasPeriod)

  const renderItem = ({ item }) => (
      <TaskItem 
          item={ item } 
          route={ route.name } 
          //setVisibility={ setToCalendarVisibility } 
          //setSelectedItem={ setSelectedItem }
          key={ item.id } 
      />
  )


  return (
    <CustomView style={ styles.container }>
      <FlatList 
        data={routines}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </CustomView> 
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = state => ({
  data: state.tasks
})

export default connect(mapStateToProps)(Routine)
