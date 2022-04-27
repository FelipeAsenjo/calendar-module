import React, { useState } from 'react'
import { StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux'
import { useTheme } from '@react-navigation/native';

import CustomView from '../components/CustomView'
import TaskItem from '../components/TaskItem'
import AddButton from '../components/AddButton'
import ModalNewNoteTodo from '../components/ModalNewNoteTodo'
import ModalToCalendar from '../components/ModalToCalendar'

const Todo = ({ route, data }) => {
  const [selectedItem, setSelectedItem] = useState()
  const [addNewVisibility, setAddNewVisibility] = useState(false)
  const [toCalendarVisibility, setToCalendarVisibility] = useState(false)
  const { colors } = useTheme()

  const todos = data.filter( x => x.isTodo ).sort((a, b) => b.priority - a.priority)
  const renderItem = ({ item }) => {
    return <TaskItem 
            item={ item }
            route={ route.name }
            setVisibility={ setToCalendarVisibility }
            setSelectedItem={ setSelectedItem }
            key={ item.id }
          />
  }
  
  return (
    <CustomView style={ [styles.container, {backgroundColor: colors.primary}] }>
      <FlatList 
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <AddButton 
        setModalVisibility={setAddNewVisibility}
      />
      <ModalToCalendar
        visible={toCalendarVisibility}
        setVisibility={setToCalendarVisibility}
        selectedItem={selectedItem}
      />
      <ModalNewNoteTodo
        visible={addNewVisibility}
        setVisibility={setAddNewVisibility}
        route={route.name}
      />
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return { data: state.tasks }
}

export default connect(mapStateToProps)(Todo)
