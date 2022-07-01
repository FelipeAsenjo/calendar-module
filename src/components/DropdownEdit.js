import { MenuItem } from "react-native-material-menu";

export default (props) => {
  const { id, date, time, toggle, text, setSelectedItem } = props;

  const handlePress = () => {
    setSelectedItem(id);

    toggle();
  };

  return <MenuItem onPress={handlePress}>{text}</MenuItem>;
};
