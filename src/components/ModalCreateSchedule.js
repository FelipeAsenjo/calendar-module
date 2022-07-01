import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import Modal from "./Modal";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import DateTimePicker from "./DateTimePicker";
import Select from "./Select";
import { createNewTask } from "../utils/taskModifiers";
import { addTask } from "../reducers/tasks";

export default ({ visible, setVisibility, route }) => {
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
    setFormInfo({
      ...formInfo,
      [name]: text,
    });
  };

  return (
    <Modal visible={visible} title="Create Task" transparency={false}>
      <FormInput
        autoFocus={true}
        name="title"
        placeholder="Title..."
        onChangeText={(text) => handleChange(text, "title")}
      />
      <FormInput
        name="description"
        placeholder="Description..."
        onChangeText={(text) => handleChange(text, "description")}
        multiline={true}
        numberOfLines={10}
      />
      <Select setSelectedTags={setSelectedTags} />
      <View style={styles.buttonContainer}>
        <DateTimePicker mode="date" toForm={handleChange} />
        <DateTimePicker mode="time" toForm={handleChange} />
      </View>
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
