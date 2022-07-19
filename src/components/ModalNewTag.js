import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, View, Dimensions, LogBox } from "react-native";
import { Formik } from "formik";
import NativeColorPicker from "native-color-picker";
import Modal from "./Modal";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";
import { createTag } from "../reducers/tags";

const COLORS = [
  "#d73964",
  "#d23440",
  "#db643a",
  "#e88334",
  "#e2a71e",
  "#e25241",
  "#d0da59",
  "#4053ae",
  "#70b949",
  "#73564a",
  "#67ab5a",
  "#8f36aa",
  "#f6c244",
  "#52b9d0",
  "#4595ec",
  "#009688",
  "#5abeA7",
  "#59bccd",
  "#4a97e4",
  "#2d68cd",
  "#9946c7",
  "#d9639e",
  "#6d6f74",
  "#939287",
  "#868ea3",
];

export default ({ visible, setVisibility }) => {
  const dispatch = useDispatch();

  const handleCancel = () => setVisibility(false);

  const handleFormSubmit = (values) => {
    dispatch(createTag(values));
    setVisibility(false);
  };

  useEffect(() => {
    LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);
  }, []);

  return (
    <Modal visible={visible} title="Create Tag" close={handleCancel}>
      <Formik
        initialValues={{ item: "", color: "#db643a" }}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.container}>
            <FormInput
              name="tag"
              placeholder="Tag name..."
              onChangeText={handleChange("item")}
              value={values.item}
            />
            <NativeColorPicker
              colors={COLORS}
              selectedColor={values.color}
              gradient
              sort
              shadow
              markerType="checkmark"
              markerDisplay="adjust"
              onSelect={handleChange("color")}
              scrollEnabled={false}
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
