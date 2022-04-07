import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import Pill from './Pill';

// cambiar el tag de color dinamicamente

export default (props) => {
  const { colors } = useTheme()
  const { tags, priority } = props
  return (
    <View style={ styles.container }> 
      { tags.map( (tag, idx) => <Pill background={ colors.secondary } tag={ tag } key={ idx }/>) }
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
