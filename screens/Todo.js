import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default () => {
  const { colors } = useTheme()

  return (
    <View style={ [styles.container, {backgroundColor: colors.primary}] }>
      <Text>Soy Todo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
