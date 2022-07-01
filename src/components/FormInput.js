import { StyleSheet, Text, TextInput } from "react-native";
import { useTheme } from "@react-navigation/native";

export default ({ ...rest }) => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    backgroundColor: "#333",
    marginVertical: 10,
    padding: 10,
    color: "white",
    borderRadius: 10,
    fontSize: 18,
    textAlignVertical: "top",
  },
});
