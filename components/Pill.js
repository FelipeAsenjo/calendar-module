import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default (props) => {
  const { colors } = useTheme()
  const { tag, background } = props

  return (
    <Text 
      style={ [styles.pill, {backgroundColor: background, color: colors.light}] }>
        { tag }
    </Text>
  );
}

const styles = StyleSheet.create({
  pill: {
    marginRight: 5,
    paddingHorizontal: 5,
    borderRadius: 15,
    fontSize: 12,
  }
})
