import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import CustomView from '../components/CustomView';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { useTheme } from '@react-navigation/native';

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
          '2022-03-22': [{name: 'item 1 - any js object'}],
          '2022-03-23': [{name: 'item 2 - any js object', height: 80}],
          '2022-03-24': [],
          '2022-03-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
        }}
      />
    </CustomView> 
  );
}

