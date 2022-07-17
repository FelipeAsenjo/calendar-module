import { useState } from "react";
import { useDispatch } from "react-redux";
import SubmitButton from "./SubmitButton";
import Modal from "./Modal";
import FormInput from "./FormInput";
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
    const isTodo = route === "Todo" ? true : false;

    setFormInfo({
      ...formInfo,
      [name]: text,
      isTodo,
    });
  };

  return (
    <Modal visible={visible} title={`Create ${route}`} close={handleCancel}>
      <FormInput
        name="title"
        placeholder="Title..."
        onChangeText={(text) => handleChange(text, "title")}
      />
      <Select setSelectedTags={setSelectedTags} />
      <FormInput
        name="description"
        placeholder="Description..."
        onChangeText={(text) => handleChange(text, "description")}
        multiline
        numberOfLines={10}
      />
      <SubmitButton text="Submit" color="secondary" onPress={handleSubmit} />
    </Modal>
  );
};
