import { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { useTheme } from "@react-navigation/native";

import CustomView from "../components/CustomView";
import TagsItem from "../components/TagsItem";
import AddButton from "../components/AddButton";
import ModalNewTag from "../components/ModalNewTag";

export default ({ route }) => {
  const tags = useSelector((state) => state.tags);
  const [addNewVisibility, setAddNewVisibility] = useState(false);
  const { colors } = useTheme();

  const renderItem = ({ item }) => (
    <TagsItem item={item} route={route.name} key={item.id} />
  );

  return (
    <CustomView style={styles.container}>
      <FlatList
        data={tags}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <AddButton setModalVisibility={setAddNewVisibility} />
      <ModalNewTag
        visible={addNewVisibility}
        setVisibility={setAddNewVisibility}
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
