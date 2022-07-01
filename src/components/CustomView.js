import { StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";

export default ({ children }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
