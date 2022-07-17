import { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import SelectBox from "react-native-multi-selectbox";
import SubmitButton from "./SubmitButton";
import Modal from "./Modal";
import FormInput from "./FormInput";
import Select from "./Select";
import OtherSelect from "./OtherSelect";
import { createNewTask } from "../utils/taskModifiers";
import { addTask } from "../reducers/tasks";

export default ({ visible, setVisibility, route }) => {
  const dispatch = useDispatch();

  const handleCancel = () => setVisibility(false);

  const handleFormSubmit = (values) => {
    const templateItem = createNewTask();
    const tags = values.tags.map(tag => tag.id)

    dispatch(addTask({ ...templateItem, ...values, hasPeriod: true, tags }));
    setVisibility(false);
  };

  return (
    <Modal visible={visible} title={`Create ${route}`} close={handleCancel}>
      <Formik
        initialValues={{
          title: "",
          tags: [],
          description: "",
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
            <OtherSelect
              setFieldValue={(value) => setFieldValue("tags", value)}
              selectedTags={values.tags}
            />
            <FormInput
              placeholder="Description..."
              onChangeText={handleChange("description")}
              value={values.description}
              multiline
              numberOfLines={10}
            />
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
});
