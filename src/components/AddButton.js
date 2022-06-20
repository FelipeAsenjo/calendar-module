import { StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

export default ({ setModalVisibility }) => {
  const { colors } = useTheme()

  return (
    <TouchableOpacity 
      style={ [styles.button, {backgroundColor: colors.secondary, color: colors.light}] }
      onPress={() => setModalVisibility(true)}
    >
      <Feather name='plus' size={ 40 } color={ colors.light } />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 25,
    padding: 15,
    borderRadius: 50,
    elevation: 20
  }
})
