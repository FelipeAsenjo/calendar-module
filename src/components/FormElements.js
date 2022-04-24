import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

export const FormInput = ({ text, ...rest }) => {
  return (
    <>
      <Text style={styles.text}>{ text }</Text>
      <TextInput style={styles.input} {...rest} />
    </>
  )
}

export const FormButton = ({ text, color, ...rest }) => {
  const { colors } = useTheme()

  const dynamicStyles = {
    backgroundColor: colors[color],
  }

  return (
    <TouchableOpacity style={[styles.button, dynamicStyles]} {...rest}>
      <Text style={[styles.buttonText, {color: colors.light}]}>{ text }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
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
  button: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  }
})
