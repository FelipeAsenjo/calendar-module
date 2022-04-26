import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import BottomCard from './BottomCard'
import DropdownMenu from './DropdownMenu'

export default ({ route, item, setVisibility, setSelectedItem }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => alert('Pressed!')}
      style={ styles.card }
    >
      <Text style={ styles.title }>
        { item.title }
      </Text>
      <DropdownMenu 
				id={ item.id } 
				route={ route } 
				setModalVisibility={ setVisibility } 
        setSelectedItem={setSelectedItem}
			/>
      <Text style={ styles.body }>
        { item.description }
      </Text>
      <BottomCard tags={ item.tags } priority={ item.priority }/>
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
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5, 
  },
  body: {
    marginBottom: 10,
    paddingRight: 20
  }
});
