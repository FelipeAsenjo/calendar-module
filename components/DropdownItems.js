import React from 'react'
import { Text } from 'react-native'
import { MenuItem } from 'react-native-material-menu';
import { 
  findInData,
  dataWithoutFinded,
  toCalendar,
  toNoteOrTodo,
  deleteItem
} from '../utils/taskModifiers'

export const CalendarOption = props => {
  const { data, setData, id, date, time, toggle, text } = props
  
  return (
     <MenuItem onPress={() => toCalendar(data, setData, id, null, null, toggle)}>
         { text }
      </MenuItem>
  )}

export const NoteTodoOption = (props) => {
  const { data, setData, id, isTodo, toggle, text } = props

  return ( 
      <MenuItem onPress={() => toNoteOrTodo(data, setData, id, isTodo, toggle)}>{ text }</MenuItem>
  )
}

