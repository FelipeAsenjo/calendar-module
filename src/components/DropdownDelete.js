import { connect } from 'react-redux'
import { MenuItem } from 'react-native-material-menu';
import { CustomAlert } from './CustomAlert'

import { deleteItem } from '../reducers/tasks'

const DropdownDelete = ({ id, toggle, text, deleteItem }) => {
  
  const handlePress = async () => {
    //const userAnswer = await CustomAlert('This task will be deleted', null)
    
    deleteItem(id)
    toggle()
  }

  return (
    <MenuItem onPress={handlePress}>
      { text }
    </MenuItem>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteItem: (id) => dispatch(deleteItem(id))
})

export default connect(null, mapDispatchToProps)(DropdownDelete)
