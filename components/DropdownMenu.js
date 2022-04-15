import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { Entypo } from '@expo/vector-icons';

import { 
  findInData,
  dataWithoutFinded,
  toCalendar,
  toNoteOrTodo,
  deleteItem
} from '../utils/taskModifiers'
import CustomAlert from './CustomAlert'

import { DataContext } from '../provider/context'

/*
 * 1) calendar migration form
 * 2) creation from scratch form
 * 3) edit form
 * 4) add tag form
 * 5) create a new element for every dropdown element
 * 6) delete element
*/

export default (props) => {
  const [visible, setVisible] = useState(false);
  const { data, setData } = useContext( DataContext )
  const { id, route } = props

  const toggle = () => setVisible(!visible);

    // **DROPDOWN RENDERS**
  const menuOptions = () => {
    const calendarOption = <MenuItem 
        onPress={() => toCalendar(data, setData, id, null, null, toggle)}>
          Create Schedule
       </MenuItem>
    const todoOption = <MenuItem 
      onPress={() => toNoteOrTodo(data, setData, id, true, toggle)}>
          Create To do
      </MenuItem>
    const noteOption = <MenuItem 
          onPress={() => toNoteOrTodo(data, setData, id, false, toggle)}>
            Create Note
        </MenuItem>
    
    switch( route ) {
      case 'Calendar':
        return <>{ todoOption }{ noteOption }</>
        break
      case 'Todo':
        return <>{ calendarOption }{ noteOption }</>
        break
      case 'Notes':
        return <>{ calendarOption }{ todoOption }</>
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
        { menuOptions() }
        <MenuDivider />
        <MenuItem onPress={() => deleteItem(data, setData, id, toggle)}>
          Delete
        </MenuItem>
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
