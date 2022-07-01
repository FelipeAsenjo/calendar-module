import { StyleSheet, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

export default ({ tag, background }) => {
  const { colors } = useTheme();

  return (
    <Text
      style={[
        styles.pill,
        { backgroundColor: background, color: colors.light },
      ]}
    >
      {tag}
    </Text>
  );
};

const styles = StyleSheet.create({
  pill: {
    marginRight: 5,
    paddingVertical: 1,
    paddingHorizontal: 8,
    borderRadius: 15,
    fontSize: 12,
    fontWeight: "bold",
  },
});
