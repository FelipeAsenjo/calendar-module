import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import BottomCard from './BottomCard'
import DropdownMenu from './DropdownMenu'

export default ({ children, route, item, setVisibility, setSelectedItem }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => alert('Pressed!')}
      style={ styles.card }
    >
      { children }
      <DropdownMenu 
				id={ item.id } 
				route={ route } 
				setModalVisibility={ setVisibility } 
        setSelectedItem={setSelectedItem}
			/>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginTop: 12,
    marginHorizontal: 12,
    padding: 12,
    borderRadius: 10,
    elevation: 20,
  },
});
