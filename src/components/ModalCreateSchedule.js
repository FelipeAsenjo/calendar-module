import { useDispatch } from "react-redux";
import { StyleSheet, View, Dimensions } from "react-native";
import { Formik } from "formik";
import Modal from "./Modal";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";
import DateTimePicker from "./DateTimePicker";
import Select from "./Select";
import { createNewTask } from "../utils/taskModifiers";
import { addTask } from "../reducers/tasks";

import { formatDate, formatTime } from "../utils/taskModifiers";

export default ({ visible, setVisibility, route }) => {
  const dispatch = useDispatch();

  const handleCancel = () => setVisibility(false);

  const handleFormSubmit = (values) => {
    const templateItem = createNewTask();

    const date = formatDate(values.date);
    const time = values.time ? formatTime(values.time) : null;
    const tags = values.tags.map((tag) => tag.id);

    dispatch(addTask({ ...templateItem, ...values, tags, date, time }));
    setVisibility(false);
  };

  return (
    <Modal visible={visible} title="Create Task" close={handleCancel}>
      <Formik
        initialValues={{
          title: "",
          tags: [],
          description: "",
          date: new Date(),
          time: null,
        }}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {({ handleChange, handleSubmit, setFieldValue, values }) => (
          <View style={styles.container}>
            <FormInput
              placeholder="Title..."
              onChangeText={handleChange("title")}
              value={values.title}
            />
            <FormInput
              placeholder="Description..."
              value={values.description}
              onChangeText={handleChange("description")}
              multiline={true}
              numberOfLines={10}
            />
            <Select
              setFieldValue={(value) => setFieldValue("tags", value)}
              selectedTags={values.tags}
            />
            <View style={styles.buttonContainer}>
              <DateTimePicker
                mode="date"
                setFieldValue={(value) => setFieldValue("date", value)}
              />
              <DateTimePicker
                mode="time"
                setFieldValue={(value) => setFieldValue("time", value)}
              />
            </View>
            <SubmitButton
              text="Submit"
              color="secondary"
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 25,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
