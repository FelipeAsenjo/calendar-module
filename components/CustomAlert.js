import { Alert } from 'react-native';

import { DataContext } from '../provider/context'

export default (title, msg, action) => {
  const { data, setData } = useContext( DataContext )

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
