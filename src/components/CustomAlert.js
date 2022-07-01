import { Alert } from "react-native";

export default (title, msg) => {
  return new Promise((resolve, reject) => {
    Alert.alert(title, msg, [
      {
        text: "Cancel",
        onPress: () => resolve(false),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => resolve(true),
      },
    ]);
  });
};
