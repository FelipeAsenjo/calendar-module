import { Text, View } from 'react-native';
import Pill from './Pill';

export default (props) => {
  const { tags, priority } = props

  return (
    <View> 
      { tags.forEach( tag => <Pill name={ tag } />) }
      <Text>{ priority }</Text>
    </View>
  );
}

