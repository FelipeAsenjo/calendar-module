import { useDispatch } from 'react-redux'
import { MenuItem } from 'react-native-material-menu';
import { CustomAlert } from './CustomAlert'

import { deleteItem } from '../reducers/tasks'

export default ({ id, toggle, text }) => {
  const dispatch = useDispatch()
  
  const handlePress = async () => {
    //const userAnswer = await CustomAlert('This task will be deleted', null)
    
    dispatch(deleteItem(id))
    toggle()
  }

  return (
    <MenuItem onPress={handlePress}>
      { text }
    </MenuItem>
  )
}

