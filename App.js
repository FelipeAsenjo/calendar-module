import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { SelectProvider } from "@mobile-reality/react-native-select-pro";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator, useTheme } from "@react-navigation/drawer";

/*
 * 1) google calendar integration back & forward
 * 2) required fields in creation forms
 * 3) tag filters
 * 4) settings screen
 * 5) profile screen
 * 6) local storage
 * 7) remote backup (related with point 1??)
 * 9) edit form
 * 10) add tag form
 * cambiar de color los tags
 * crear un formulario aparte para routines y cumpleanos desde la pantalla calendar en el dropdown menu,
 * bug in Switch, can't be birthday and routine ( solved by action button? )
 */
import Calendar from "./src/screens/Calendar";
import Todo from "./src/screens/Todo";
import Notes from "./src/screens/Notes";
import Routine from "./src/screens/Routine";
import Tags from "./src/screens/Tags";

import store from "./src/store";

const Drawer = createDrawerNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondary: "#931323",
    primary: "#333",
    taskDone: "rgba(0, 0, 0, 0.4)",
    light: "#fff",
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <SelectProvider>
        <NavigationContainer theme={MyTheme}>
          <Drawer.Navigator
            initialRouteName="Routine"
            screenOptions={{
              headerStyle: {
                backgroundColor: "#931323",
              },
              headerTintColor: "#fff",
            }}
          >
            <Drawer.Screen name="Calendar" component={Calendar} />
            <Drawer.Screen name="Todo" component={Todo} />
            <Drawer.Screen name="Notes" component={Notes} />
            <Drawer.Screen name="Routine" component={Routine} />
            <Drawer.Screen name="Tags" component={Tags} />
          </Drawer.Navigator>
        </NavigationContainer>
      </SelectProvider>
    </Provider>
  );
}
