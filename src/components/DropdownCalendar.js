import { MenuItem } from 'react-native-material-menu';

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
