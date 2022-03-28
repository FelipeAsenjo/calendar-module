import 'react-native-gesture-handler';
import React from 'react';
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
    taskDone: 'rgba(0, 0, 0, 0.4)',
    light: '#fff'
  }
}

const data = {
  '2022-03-27': [{
    title: 'Item 1 - any js object',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isTodo: false,
    hasPeriod: false,
    period: {},
    date: '2022-03-27',
    time: null,
    tags: ['Home'],
    priority: 1000
  },
  {
    title: 'Item 1 - any js object',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isTodo: false,
    hasPeriod: false,
    period: {},
    date: '2022-03-27',
    time: null,
    tags: ['Work'],
    priority: 600
  },
  {
    title: 'Item 1 - any js object',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isTodo: false,
    hasPeriod: false,
    period: {},
    date: '2022-03-27',
    time: null,
    tags: ['Home', 'Idea'],
    priority: 1000
  },
  ],
  '2022-03-29': [{
    title: 'Item 2 - any js object',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isTodo: false,
    hasPeriod: false,
    period: {},
    date: '2022-03-29',
    time: null,
    tags: ['Work', 'Idea'],
    priority: 800
  },
  {
    title: 'Item 1 - any js object',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isTodo: false,
    hasPeriod: false,
    period: {},
    date: '2022-03-29',
    time: null,
    tags: ['Home'],
    priority: 500
  }],
  '2022-03-30': [{
    title: 'Item 3 - any js object',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isTodo: false,
    hasPeriod: false,
    period: {},
    date: '2022-03-30',
    time: null,
    tags: ['Home'],
    priority: 800
  }],
  '2022-03-31': [{
    title: 'Item 4 - any js object',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isTodo: false,
    hasPeriod: false,
    period: {},
    date: '2022-03-31',
    time: null,
    tags: ['Work'],
    priority: 600
  },
  {
    title: 'any js object',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isTodo: false,
    hasPeriod: false,
    period: {},
    date: '2022-03-31',
    time: null,
    tags: ['Home', 'Idea'],
    priority: 800
  }]
}

export const DataContext = React.createContext({})

export default function App() {
  return (
    <DataContext.Provider value={ data }>
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
    </DataContext.Provider>
  );
}

