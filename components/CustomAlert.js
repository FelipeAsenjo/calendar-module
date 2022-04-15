import { Alert } from 'react-native';

export default (title, msg, action) => {
  Alert.alert(
    title,
    msg,
    [
      {
        text: 'Cancel',
        //onPress: action,
        style: 'cancel'
      },
      {
        text: 'OK',
        onPress: action,
      }
    ]
  )
}
