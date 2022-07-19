import { useDispatch } from "react-redux";
import { StyleSheet, View, Dimensions } from "react-native";
import { Formik } from "formik";
import Modal from "./Modal";
import SubmitButton from "./SubmitButton";
import DateTimePicker from "./DateTimePicker";
import { createNewTask } from "../utils/taskModifiers";
import { toCalendar } from "../reducers/tasks";

import { formatDate, formatTime } from "../utils/taskModifiers";

export default ({ visible, setVisibility, id }) => {
  const dispatch = useDispatch();
  const currentDate = new Date();

  const handleCancel = () => setVisibility(false);

  const handleFormSubmit = (values) => {
    const date = formatDate(values.date);
    const time = values.time ? formatTime(values.time) : null;

    dispatch(toCalendar(id, date, time));
    setVisibility(false);
  };

  return (
    <Modal visible={visible} title="Move to Calendar" close={handleCancel}>
      <Formik
        initialValues={{
          date: new Date(),
          time: null,
        }}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {({ handleChange, handleSubmit, setFieldValue, values }) => (
          <View style={styles.container}>
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
