import { useState } from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, View } from 'react-native'
import FormButton from "./FormButton";
import Modal from "./Modal";
import FormInput from "./FormInput";
import DateTimePicker from "./DateTimePicker";
import { createNewTask } from "../utils/taskModifiers";
import { addTask } from '../reducers/tasks'

export default ({ visible, setVisibility, route }) => {
  const [formInfo, setFormInfo] = useState({});
  const dispatch = useDispatch();

  const handleCancel = () => setVisibility(false);

  const handleSubmit = () => {
    const templateItem = createNewTask()

    const newItem = { ...templateItem, ...formInfo };
    dispatch(addTask(newItem));

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
    <Modal visible={visible} title={`Create ${route}`}>
      <FormInput
        autoFocus={true}
        name="title"
        text="Title"
        onChangeText={(text) => handleChange(text, "title")}
      />
      <FormInput
        name="description"
        text="Description"
        onChangeText={(text) => handleChange(text, "description")}
        multiline={true}
      />
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
