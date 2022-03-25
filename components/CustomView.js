import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default (props) => {
  const { colors } = useTheme()

  return (
    <View 
      style={ [styles.container, {backgroundColor: colors.primary}] }
    >
      { props.children }      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
