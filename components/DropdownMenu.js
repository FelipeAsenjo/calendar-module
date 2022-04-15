import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native';
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
import { NoteTodoOption, CalendarOption } from './DropdownItems'

import { DataContext } from '../provider/context'

/*
 * 1) calendar migration form
 * 2) creation from scratch form
 * 3) edit form
 * 4) add tag form
 * 6) delete element
*/

export default (props) => {
  const [visible, setVisible] = useState(false);
  const { data, setData } = useContext( DataContext )
  const { id, route } = props

  const toggle = () => setVisible(!visible);

  const menuOptions = () => {
    switch( route ) {
      case 'Calendar':
        return (
          <>
            <NoteTodoOption data={data} setData={setData} id={id} isTodo={true} toggle={toggle} text={'Create To do'} />
            <NoteTodoOption data={data} setData={setData} id={id} isTodo={false} toggle={toggle} text={'Create Note'} />
          </>
        )
        break
      case 'Todo':
        return (
          <>
            <CalendarOption data={data} setData={setData} id={id} date={null} time={null} toggle={toggle} text={'Create Schedule'} />
            <NoteTodoOption data={data} setData={setData} id={id} isTodo={false} toggle={toggle} text={'Create Note'} />
          </>
        )
        break
      case 'Notes':
        return (
          <>
            <CalendarOption data={data} setData={setData} id={id} date={null} time={null} toggle={toggle} text={'Create Schedule'} />
            <NoteTodoOption data={data} setData={setData} id={id} isTodo={true} toggle={toggle} text={'Create To do'} />
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
