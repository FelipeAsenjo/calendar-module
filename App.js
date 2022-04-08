import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator, useTheme } from '@react-navigation/drawer';

import Calendar from './screens/Calendar'
import Todo from './screens/Todo'
import Notes from './screens/Notes'

import { DataContext, context } from './provider/context'

const Drawer = createDrawerNavigator()

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondary: '#931323',
    primary: '#333',
    taskDone: 'rgba(0, 0, 0, 0.4)',
    light: '#fff'
  }
}

export default function App() {
  return (
    <DataContext.Provider value={ context }>
      <NavigationContainer theme={ MyTheme }>
        <Drawer.Navigator initialRouteName='Todo' 
          screenOptions = {{
            headerStyle: {
              backgroundColor: '#931323'
            },
            headerTintColor: '#fff'
          }}
        >
          <Drawer.Screen name='Calendar' component={ Calendar } />
          <Drawer.Screen name='Todo' component={ Todo } />
          <Drawer.Screen name='Notes' component={ Notes } />
        </Drawer.Navigator>
      </NavigationContainer>
    </DataContext.Provider>
  );
}

