import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import { useTheme } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

export default ({ ...rest }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <MaterialIcons name="cancel" size={50} color={colors.primary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 25,
    right: 25,
    borderRadius: 50,
    elevation: 20,
  },
});
