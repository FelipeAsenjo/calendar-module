import 'react-native-gesture-handler';
import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator, useTheme } from '@react-navigation/drawer';

import Calendar from './screens/Calendar'
import Todo from './screens/Todo'
import Notes from './screens/Notes'

const Drawer = createDrawerNavigator()

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondary: '#931323',
    primary: '#333',
    taskDone: 'rgba(255, 255, 255, 0.5)',
    light: '#fff'
  }
}

export default function App() {
  return (
    <NavigationContainer theme={ MyTheme }>
      <Drawer.Navigator initialRouteName='Calendar' 
        screenOptions = {{
          headerStyle: {
            backgroundColor: '#931323'
          },
          headerTintColor: '#fff'
        }}
      >
        <Drawer.Screen name='Calendar' component={ Calendar } />
        <Drawer.Screen name='To Do' component={ Todo } />
        <Drawer.Screen name='Notes' component={ Notes } />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

