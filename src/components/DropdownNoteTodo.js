import { useDispatch } from "react-redux";
import { MenuItem } from "react-native-material-menu";

import { toNote, toTodo } from "../reducers/tasks";

export default ({ id, isTodo, toggle }) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    {
      isTodo ? dispatch(toTodo(id)) : dispatch(toNote(id));
    }

    toggle();
    alert(`${isTodo ? "To do" : "Note"} has been successfully created`);
  };

  return (
    <MenuItem onPress={handlePress}>
      {isTodo ? "Create To do" : "Create Note"}
    </MenuItem>
  );
};
