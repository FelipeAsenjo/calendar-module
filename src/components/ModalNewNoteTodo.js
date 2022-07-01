import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import FormButton from "./FormButton";
import Modal from "./Modal";
import FormInput from "./FormInput";
import DateTimePicker from "./DateTimePicker";
import Select from "./Select";
import { createNewTask } from "../utils/taskModifiers";
import { addTask } from "../reducers/tasks";

export default ({ visible, setVisibility, route }) => {
  const tags = useSelector((state) => state.tags);
  const [formInfo, setFormInfo] = useState({});
  const [selectedTags, setSelectedTags] = useState([]);
  const dispatch = useDispatch();

  const handleCancel = () => setVisibility(false);

  const handleSubmit = () => {
    const templateItem = createNewTask();

    const newItem = { ...templateItem, ...formInfo, tags: selectedTags };
    dispatch(addTask(newItem));

    setSelectedTags([]);
    setFormInfo({});
    setVisibility(false);
  };

  const handleChange = (text, name) => {
    const isTodo = route === "Todo" ? true : false;

    setFormInfo({
      ...formInfo,
      [name]: text,
      isTodo,
    });
  };

  return (
    <Modal visible={visible} title={`Create ${route}`} transparency={false}>
      <FormInput
        autoFocus={true}
        name="title"
        placeholder='Title...'
        onChangeText={(text) => handleChange(text, "title")}
      />
      <FormInput
        name="description"
        placeholder='Description...'
        onChangeText={(text) => handleChange(text, "description")}
        multiline
        numberOfLines={10}
      />
      <Select setSelectedTags={setSelectedTags} />
      <View style={styles.buttonContainer}>
        <FormButton text="Cancel" color="primary" onPress={handleCancel} />
        <FormButton text="Submit" color="secondary" onPress={handleSubmit} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
