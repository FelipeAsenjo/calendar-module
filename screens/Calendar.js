import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default () => {
  const { colors } = useTheme()

  return (
    <View 
      style={ [styles.container, {backgroundColor: colors.primary}] }
    >
      <Text>Soy Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
