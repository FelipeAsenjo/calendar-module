import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { Entypo } from '@expo/vector-icons';

export default (props) => {
  const [visible, setVisible] = useState(false);
  const { id } = props

  const toggle = () => setVisible(!visible);

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
        <MenuItem onPress={toggle}>Menu item 1</MenuItem>
        <MenuItem onPress={toggle}>Menu item 2</MenuItem>
        <MenuItem disabled>Disabled item</MenuItem>
        <MenuDivider />
        <MenuItem onPress={toggle}>Menu item 4</MenuItem>
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
