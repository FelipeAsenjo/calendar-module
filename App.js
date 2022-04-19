import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator, useTheme } from '@react-navigation/drawer';

/*
 * 1) google calendar integration back & forward
 * 2) creation forms
 * 3) tag filters
 * 4) settings screen
 * 5) profile screen
 * 6) local storage
 * 7) remote backup (related with point 1??)
*/
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
  const [data, setData] = useState( context.data )
  const value = { data, setData }

  return (
    <DataContext.Provider value={ value }>
      <NavigationContainer theme={ MyTheme }>
        <Drawer.Navigator initialRouteName='Notes' 
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

