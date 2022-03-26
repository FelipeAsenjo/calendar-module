import { StyleSheet, Text, View } from 'react-native';

export default (props) => {
  const { name } = props

  return (
    <View> 
      <Text>{ name }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {

  },
  text: {

  }
})
