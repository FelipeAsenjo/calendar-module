import { StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

import TaskCard from "./TaskCard";
import BottomCard from "./BottomCard";

export default ({ route, item, setVisibility, setSelectedItem }) => {
  const tags = useSelector((state) => state.tags);
  const itemTags = tags.filter((x) => item.tags.includes(x.id));

  return (
    <TaskCard
      id={item.id}
      setVisibility={setVisibility}
      setSelectedItem={setSelectedItem}
      route={route}
    >
      {item.title.trim() !== "" && (
        <Text style={styles.title}>{item.title}</Text>
      )}
      {item.description.trim() !== "" && (
        <Text style={styles.body}>{item.description}</Text>
      )}
      <BottomCard tags={itemTags} priority={item.priority} />
    </TaskCard>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  body: {
    marginBottom: 10,
    paddingRight: 20,
  },
});
