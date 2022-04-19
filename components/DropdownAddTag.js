import { useContext } from 'react'
import { MenuItem } from 'react-native-material-menu';
import { findInData, dataWithoutFinded } from '../utils/taskModifiers'

import { DataContext } from '../provider/context'

export default (props) => {
  const { data, setData } = useContext( DataContext )
  const { id, date, time, toggle, text } = props

  const handlePress = () => {
    const task = findInData( data, id )
    toggle()
  }
  
  return (
     <MenuItem onPress={handlePress}>
         { text }
      </MenuItem>
)}
