import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import BottomCard from './BottomCard'
import DropdownMenu from './DropdownMenu'

export default(props) => {
  const { task } = props

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      underlayColor="#ddd"
      onPress={() => alert('Pressed!')}
      style={ styles.card }
    >
      <Text style={ styles.title }>
        { task.title }
      </Text>
      <DropdownMenu id={ task.id }/>
      <Text style={ styles.body }>
        { task.description }
      </Text>
      <BottomCard tags={ task.tags } priority={ task.priority }/>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginTop: 16,
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
    marginBottom: 10
  }
});
