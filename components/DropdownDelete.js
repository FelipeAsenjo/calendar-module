import { useContext } from 'react'
import { MenuItem } from 'react-native-material-menu';
import { findInData, dataWithoutFinded } from '../utils/taskModifiers'
import { CustomAlert } from '.'

import { DataContext } from '../provider/context'

export default (props) => {
  const { data, setData } = useContext( DataContext )
  const { id, toggle, text } = props
  
  const handlePress = async () => {
    const userAnswer = await CustomAlert('This task will be deleted', null)
    const filteredData = dataWithoutFinded( data, id )

    toggle()
    { userAnswer ? setData([...filteredData]) : setData([...data]) }
  }

  return (
    <MenuItem onPress={handlePress}>
      { text }
    </MenuItem>
  )
}
