import { StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

import TaskCard from "./TaskCard";

export default ({ route, item }) => {
  return (
    <TaskCard id={item.id} route={route}>
      <Feather name="tag" size={24} color={item.color} />
      <Text style={styles.title}>{item.item}</Text>
    </TaskCard>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
