import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import CustomView from '../components/CustomView';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { useTheme } from '@react-navigation/native';

import TaskCalendar from '../components/TaskCard'

export default () => {
  const { colors } = useTheme()

  return (
    <CustomView>
      <Agenda 
        theme={{
          backgroundColor: colors.primary,
          calendarBackground: colors.primary,
          textSectionTitleColor: colors.light,
          selectedDayBackgroundColor: colors.secondary,
          dayTextColor: colors.light,
          monthTextColor: colors.light,
        }}
         items={{
          '2022-03-22': [{
            title: 'Item 1 - any js object',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tags: ['Home'],
            priority: 1000
          },
          {
            title: 'Item 1 - any js object',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tags: ['Work'],
            priority: 600
          },
          {
            title: 'Item 1 - any js object',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tags: ['Home', 'Idea'],
            priority: 1000
          },
          ],
          '2022-03-23': [{
            title: 'Item 2 - any js object',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tags: ['Work', 'Idea'],
            priority: 800
          },
          {
            title: 'Item 1 - any js object',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tags: ['Home'],
            priority: 500
          }],
          '2022-03-25': [{
            title: 'Item 3 - any js object',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tags: ['Home'],
            priority: 800
          }],
          '2022-03-26': [{
            title: 'Item 4 - any js object',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tags: ['Work'],
            priority: 600
          },
          {
            title: 'any js object',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            tags: ['Home', 'Idea'],
            priority: 800
          }]
        }}
        renderItem={ TaskCalendar }
        showOnlySelectedDayItems={ true }
      />
    </CustomView> 
  );
}

