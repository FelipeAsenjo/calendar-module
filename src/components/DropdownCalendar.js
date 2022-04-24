import { useContext, useEffect } from 'react'
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
  const { id, setVisibility, toggle, text } = props

  const handlePress = () => {
    setSelectedItem( id )
    setVisibility(true)

    toggle()
  }
  
  return (
     <MenuItem onPress={handlePress}>
         { text }
      </MenuItem>
)}
