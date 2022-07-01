import { MenuItem } from "react-native-material-menu";

export default ({ id, setVisibility, setSelectedItem, toggle }) => {
  const handlePress = () => {
    setSelectedItem(id);
    setVisibility(true);

    toggle();
  };

  return <MenuItem onPress={handlePress}>{"Create Schedule"}</MenuItem>;
};
