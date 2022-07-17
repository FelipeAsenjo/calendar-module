import { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { useTheme } from "@react-navigation/native";

import CustomView from "../components/CustomView";
import TaskItem from "../components/TaskItem";
import AddButton from "../components/AddButton";
import ModalNewRoutine from "../components/ModalNewRoutine";

export default ({ route }) => {
  const data = useSelector((state) => state.tasks);
  const [addNewVisibility, setAddNewVisibility] = useState(false);
  const { colors } = useTheme();

  const routines = data.filter((x) => x.hasPeriod);

  const renderItem = ({ item }) => (
    <TaskItem item={item} route={route.name} key={item.id} />
  );

  return (
    <CustomView style={styles.container}>
      <FlatList
        data={routines}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <AddButton setModalVisibility={setAddNewVisibility} />
      <ModalNewRoutine
        visible={addNewVisibility}
        setVisibility={setAddNewVisibility}
        route={route.name}
      />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
