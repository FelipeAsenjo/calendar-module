import { StyleSheet, Text, TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default ({ text, ...rest }) => {
  return (
    <>
      <Text style={styles.text}>{ text }</Text>
      <TextInput style={styles.input} {...rest} />
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'flex-start',
    fontSize: 20
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: '#333',
    marginBottom: 10,
    padding: 10,
    color: 'white',
    borderRadius: 10,
    fontSize: 18,
  },
})
