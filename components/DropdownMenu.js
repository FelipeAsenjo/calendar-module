import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { Entypo } from '@expo/vector-icons';

export default (props) => {
  const [visible, setVisible] = useState(false);
  const { id, route } = props
  console.log( route )

  const toggle = () => setVisible(!visible);

  const menuOptions = () => {
    const availableOptions = ['Create Schedule', 'Create To do', 'Create Note']

    switch( route ) {
      case 'Calendar':
        return [availableOptions[1], availableOptions[2]]
        break
      case 'Todo':
        return [availableOptions[0], availableOptions[2]]
        break
      case 'Notes':
        return [availableOptions[0], availableOptions[1]]
        break
    }
  }

  return (
    <View style={ styles.button }>
      <Menu
        visible={visible}
        anchor={<Entypo 
          name="dots-three-vertical" 
          size={24} 
          color="black" 
          onPress={toggle}
        />}
        onRequestClose={toggle}
      >
        <MenuItem onPress={toggle}>Edit</MenuItem>
        <MenuItem onPress={toggle}>Add tag</MenuItem>
        <MenuItem onPress={toggle}>{ menuOptions()[0] }</MenuItem>
        <MenuItem onPress={toggle}>{ menuOptions()[1] }</MenuItem>
        <MenuDivider />
        <MenuItem onPress={toggle}>Delete</MenuItem>
      </Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 16,
    right: 8
  }
})
