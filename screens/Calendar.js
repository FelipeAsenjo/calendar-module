import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import CustomView from '../components/CustomView';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { useTheme } from '@react-navigation/native';

import TaskCard from '../components/TaskCard'

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
        }}
        renderItem={ TaskCard }
        showOnlySelectedDayItems={ true }
      />
    </CustomView> 
  );
}

