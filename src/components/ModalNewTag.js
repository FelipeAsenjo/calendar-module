import { useState } from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, View } from "react-native";
import Modal from "./Modal";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import { createTag } from "../reducers/tags";

export default ({ visible, setVisibility }) => {
  const [formInfo, setFormInfo] = useState({});
  const dispatch = useDispatch();

  const handleCancel = () => setVisibility(false);

  const handleSubmit = () => {
    dispatch(createTag(formInfo));
    setVisibility(false);
  };

  const handleChange = (text, name) => {
    setFormInfo({
      ...formInfo,
      [name]: text,
    });
  };

  return (
    <Modal visible={visible} title="Create Tag" transparency={true}>
      <FormInput
        autoFocus={true}
        name="tag"
        placeholder="Tag name..."
        onChangeText={(text) => handleChange(text, "title")}
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
