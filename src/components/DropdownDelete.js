import { useDispatch } from "react-redux";
import { MenuItem } from "react-native-material-menu";
import { CustomAlert } from "./CustomAlert";

import { deleteItem } from "../reducers/tasks";
import { deleteTag } from "../reducers/tags";

export default ({ id, toggle, route }) => {
  const dispatch = useDispatch();

  const handlePress = async () => {
    //const userAnswer = await CustomAlert('This task will be deleted', null)

    route === 'Tags' ? dispatch(deleteTag(id)) : dispatch(deleteItem(id));
    toggle();
  };

  return <MenuItem onPress={handlePress}>{ 'Delete' }</MenuItem>;
};
