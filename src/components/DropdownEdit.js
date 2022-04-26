import { useContext } from 'react'
import { MenuItem } from 'react-native-material-menu';
import { findInData, dataWithoutFinded } from '../utils/taskModifiers'

export default (props) => {
  const { id, date, time, toggle, text, setSelectedItem } = props

  const handlePress = () => {
    setSelectedItem(id)

    toggle()
  }
  
  return (
     <MenuItem onPress={handlePress}>
         { text }
      </MenuItem>
)}
