import { Text, View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import Pill from './Pill'

export default ({ tags, priority }) => {
  const { colors } = useTheme()

  return (
    <View style={ styles.container }> 
      { tags.map( (tag, idx) => <Pill background={ tag.color } tag={ tag.title } key={ idx }/>) }
      <Text style={ [styles.priority, {color: colors.taskDone}] }>{ priority }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  priority: {
    marginLeft: 'auto',
    fontSize: 12,
  }
})
