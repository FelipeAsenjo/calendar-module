import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { Entypo } from '@expo/vector-icons';

import { DataContext } from '../provider/context'

export default (props) => {
  const [visible, setVisible] = useState(false);
  const { data, setData } = useContext( DataContext )
  const { id, route } = props

  const toggle = () => setVisible(!visible);
  const findInData = () => data.find(x => x.id === id)
  const dataWithoutFinded = () => data.filter(x => x.id != id)
  
  // **TASK MODIFIERS**
  const toCalendar = (date, time) => {
    const task = findInData()

    toggle()
  }
  
  const toNoteOrTodo = isTodo => {
    const taskFinded = findInData()
    const filteredData = dataWithoutFinded()
    const modifiedTask = {
      ...taskFinded,
      isTodo: isTodo,
      hasPeriod: false,
      period: {},
      date: null,
      time: null
    }

    setData(() => [...filteredData, modifiedTask])

    toggle()
    alert(`${isTodo ? "To do" : "Note"} has been successfully created`)
  }

  // **DROPDOWN RENDERS**
  const menuOptions = id => {
    const calendarOption = <MenuItem onPress={toCalendar}>Create Schedule</MenuItem>
    const todoOption = <MenuItem onPress={() => toNoteOrTodo(true)}>Create To do</MenuItem>
    const noteOption = <MenuItem onPress={() => toNoteOrTodo(false)}>Create Note</MenuItem>
    
    switch( route ) {
      case 'Calendar':
        return (
          <>
            { todoOption }
            { noteOption }
          </>
        )
        break
      case 'Todo':
        return (
          <>
            { calendarOption }
            { noteOption }
          </>
        )
        break
      case 'Notes':
        return (
          <>
            { calendarOption }
            { todoOption }
          </>
        )
        break
    }
  }

  return (
    <View style={ styles.button }>
      <Menu
        visible={visible}
        anchor={<Entypo 
          name="dots-three-vertical" 
          size={24} 
          color="black" 
          onPress={toggle}
        />}
        onRequestClose={toggle}
      >
        <MenuItem onPress={toggle}>Edit</MenuItem>
        <MenuItem onPress={toggle}>Add tag</MenuItem>
        { menuOptions( id ) }
        <MenuDivider />
        <MenuItem onPress={toggle}>Delete</MenuItem>
      </Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 16,
    right: 8
  }
})
