import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default (props) => {
  const { colors } = useTheme()
  const { children } = props

  return (
    <View 
      style={ [styles.container, {backgroundColor: colors.primary}] }
    >
      { children }      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
