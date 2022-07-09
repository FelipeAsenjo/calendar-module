import { useState } from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, View } from "react-native";
import Modal from "./Modal";
import SubmitButton from "./SubmitButton";
import DateTimePicker from "./DateTimePicker";
import { createNewTask } from "../utils/taskModifiers";
import { toCalendar } from "../reducers/tasks";

export default ({ visible, setVisibility, id }) => {
  const [formInfo, setFormInfo] = useState({});
  const dispatch = useDispatch();

  const handleCancel = () => setVisibility(false);

  const handleSubmit = () => {
    dispatch(toCalendar(id, formInfo.date, formInfo.time));
    setVisibility(false);
  };

  const handleChange = (text, name) => {
    setFormInfo({
      ...formInfo,
      [name]: text,
    });
  };

  return (
    <Modal visible={visible} title="Move to Calendar" close={handleCancel}>
      <View style={styles.buttonContainer}>
        <DateTimePicker mode="date" toForm={handleChange} />
        <DateTimePicker mode="time" toForm={handleChange} />
      </View>
      <SubmitButton text="Submit" color="secondary" onPress={handleSubmit} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  }
});
