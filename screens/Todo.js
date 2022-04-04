import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { DataContext } from '../provider/context'

import CustomView from '../components/CustomView';
import TaskCard from '../components/TaskCard';


export default () => {
  const { colors } = useTheme()

  return (
    <CustomView style={ [styles.container, {backgroundColor: colors.primary}] }>
      <Text>Soy Todo</Text>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
