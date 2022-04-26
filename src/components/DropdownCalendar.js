import { useContext, useEffect } from 'react'
import { MenuItem } from 'react-native-material-menu';

/*
 * 8) calendar migration form ***
*/

export default ({ id, setVisibility, setSelectedItem, toggle, text }) => {

  const handlePress = () => {
    setSelectedItem(id)
    setVisibility(true)

    toggle()
  }
  
  return (
     <MenuItem onPress={handlePress}>
         { text }
      </MenuItem>
)}
