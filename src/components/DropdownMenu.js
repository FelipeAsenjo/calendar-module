import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import { Entypo } from "@expo/vector-icons";

import NoteTodoOption from "./DropdownNoteTodo";
import CalendarOption from "./DropdownCalendar";
import DeleteOption from "./DropdownDelete";

export default ({ id, route, setModalVisibility, setSelectedItem }) => {
  const [visible, setVisible] = useState(false);

  const toggle = () => setVisible(!visible);

  const menuOptions = () => {
    switch (route) {
      case "Calendar":
        return (
          <>
            <NoteTodoOption
              id={id}
              isTodo={true}
              toggle={toggle}
              setSelectedItem={setSelectedItem}
            />
            <NoteTodoOption
              id={id}
              isTodo={false}
              toggle={toggle}
              setSelectedItem={setSelectedItem}
            />
          </>
        );
        break;
      case "Todo":
        return (
          <>
            <CalendarOption
              id={id}
              setVisibility={setModalVisibility}
              toggle={toggle}
              setSelectedItem={setSelectedItem}
            />
            <NoteTodoOption
              id={id}
              isTodo={false}
              toggle={toggle}
              setSelectedItem={setSelectedItem}
            />
          </>
        );
        break;
      case "Notes":
        return (
          <>
            <CalendarOption
              id={id}
              setVisibility={setModalVisibility}
              toggle={toggle}
              setSelectedItem={setSelectedItem}
            />
            <NoteTodoOption
              id={id}
              isTodo={true}
              toggle={toggle}
              setSelectedItem={setSelectedItem}
            />
          </>
        );
        break;
    }
  };

  return (
    <View style={styles.button}>
      <Menu
        visible={visible}
        anchor={
          <Entypo
            name="dots-three-vertical"
            size={24}
            color="black"
            onPress={toggle}
          />
        }
        onRequestClose={toggle}
      >
        <MenuItem onPress={toggle}>Edit</MenuItem>
        {route !== "Tags" && <MenuItem onPress={toggle}>Add tag</MenuItem>}
        {menuOptions()}
        <MenuDivider />
        <DeleteOption
          title={"This task will be deleted"}
          id={id}
          route={route}
          toggle={toggle}
        />
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 16,
    right: 8,
  },
});
