import { useContext } from 'react'
import { MenuItem } from 'react-native-material-menu';
import { findInData } from '../utils/taskModifiers'

import { DataContext } from '../provider/context'
import { SelectedValueContext } from '../provider/context'
/*
 * 8) calendar migration form ***
*/

export default (props) => {
  const { data, setData } = useContext( DataContext )
  const { selectedItem, setSelectedItem } = useContext( SelectedValueContext )
  const { id, taskReceiver, setVisibility, toggle, text } = props

  const handlePress = () => {
    const task = findInData( data, id )
    setSelectedItem( task )
    setVisibility(true)
    console.log( selectedItem )
    //taskReceiver( task )

    toggle()
  }
  
  return (
     <MenuItem onPress={handlePress}>
         { text }
      </MenuItem>
)}
