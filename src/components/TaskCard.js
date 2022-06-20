import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import BottomCard from './BottomCard'
import DropdownMenu from './DropdownMenu'

export default ({ children, route, id, setVisibility, setSelectedItem }) => {

  const conditionalStyle = route === 'Tags' ? {flexDirection: 'row'} : {}

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => alert('Pressed!')}
      style={[ styles.card, conditionalStyle ]}
    >
      { children }
      <DropdownMenu 
				id={ id } 
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
