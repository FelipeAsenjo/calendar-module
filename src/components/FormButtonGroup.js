import { View, StyleSheet } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";

const radioButtonsData = [
  {
    id: "1",
    label: "Daily",
    value: "daily",
  },
  {
    id: "2",
    label: "Weekly",
    value: "weekly",
  },
  {
    id: "3",
    label: "Yearly",
    value: "yearly",
  },
  //{
  //id: '4',
  //label: 'Custom',
  //value: 'custom',
  //disabled: !disabled
  //},
];

export default ({ toForm, buttons, returnedKey }) => {
  const onPressRadioButton = (btns) => {
    const selectedOption = btns.find((x) => x.selected);
    toForm(selectedOption.selected, selectedOption.value);
  };

  return (
    <RadioGroup
      radioButtons={buttons}
      onPress={onPressRadioButton}
      layout="row"
      containerStyle={styles.btnGroup}
    />
  );
};

const styles = StyleSheet.create({
  btnGroup: {
    marginVertical: 15,
    alignItems: "stretch",
  },
});
