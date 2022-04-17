import { useContext } from 'react'
import { MenuItem } from 'react-native-material-menu';
import { findInData, dataWithoutFinded } from '../utils/taskModifiers'

import { DataContext } from '../provider/context'

export default (props) => {
  const { data, setData } = useContext( DataContext )
  const { id, isTodo, toggle, text } = props

  const handlePress = () => {
    const taskFinded = findInData( data, id )
    const filteredData = dataWithoutFinded( data, id )
    const modifiedTask = {
      ...taskFinded,
      isTodo: isTodo,
      hasPeriod: false,
      period: {},
      date: null,
      time: null
    }
    setData([...filteredData, modifiedTask])

    toggle()
    alert(`${isTodo ? "To do" : "Note"} has been successfully created`)
  }

  return ( 
      <MenuItem onPress={handlePress}>{ text }</MenuItem>
  )
}
