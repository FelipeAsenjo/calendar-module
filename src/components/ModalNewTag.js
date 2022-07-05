import { useState } from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, View } from "react-native";
import NativeColorPicker from "native-color-picker";
import Modal from "./Modal";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
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
  const [formInfo, setFormInfo] = useState({});
  const [selectedColor, setSelectedColor] = useState("#db643a");
  const dispatch = useDispatch();

  const handleCancel = () => setVisibility(false);

  const handleSubmit = () => {
    const newTag = { ...formInfo, color: selectedColor };

    dispatch(createTag(newTag));
    setVisibility(false);
  };

  const handleChange = (text, name) => {
    setFormInfo({
      ...formInfo,
      [name]: text,
    });
  };

  return (
    <Modal visible={visible} title="Create Tag" transparency={false}>
      <FormInput
        autoFocus={true}
        name="tag"
        placeholder="Tag name..."
        onChangeText={(text) => handleChange(text, "title")}
      />
      <NativeColorPicker
        colors={COLORS}
        selectedColor={selectedColor}
        gradient
        sort
        shadow
        useNativeDriver={true}
        markerType="checkmark"
        markerDisplay="adjust"
        onSelect={(item) => setSelectedColor(item)}
        scrollEnabled={false}
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
