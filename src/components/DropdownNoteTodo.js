import { useContext } from 'react'
import { connect } from 'react-redux'
import { MenuItem } from 'react-native-material-menu';

import { toNote, toTodo } from '../reducers/tasks'

const DropdownNoteTodo = ({ id, isTodo, toggle, text, toTodo, toNote }) => {

  const handlePress = () => {
    { isTodo ? toTodo(id) : toNote(id) }

    toggle()
    alert(`${isTodo ? "To do" : "Note"} has been successfully created`)
  }

  return ( 
      <MenuItem onPress={handlePress}>{ text }</MenuItem>
  )
}

const mapDispatchToProps = dispatch => ({
  toTodo: (id) => dispatch(toTodo(id)),
  toNote: (id) => dispatch(toNote(id)),
})

export default connect(null, mapDispatchToProps)(DropdownNoteTodo)
