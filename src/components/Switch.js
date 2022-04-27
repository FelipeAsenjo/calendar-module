import { useState } from 'react'
import { View, Switch, Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'

export default ({ name, toForm }) => {
  const { colors } = useTheme()
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    toForm(isEnabled, name)
  }

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: colors.secondary }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={ styles.switch }
      />
      <Text>{ `Is ${name.slice(2)}?` }</Text>
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  },
  switch: {
    margin: 5,
  }
})
