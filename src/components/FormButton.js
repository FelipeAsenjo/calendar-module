import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";

export default ({ text, color, ...rest }) => {
  const { colors } = useTheme();

  const dynamicStyles = {
    backgroundColor: colors[color],
  };

  return (
    <TouchableOpacity style={[styles.button, dynamicStyles]} {...rest}>
      <Text style={[styles.buttonText, { color: colors.light }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
