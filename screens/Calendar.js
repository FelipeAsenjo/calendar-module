import React, { useEffect, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { useTheme } from '@react-navigation/native';

import { DataContext } from '../provider/context'

import CustomView from '../components/CustomView';
import TaskCard from '../components/TaskCard'

export default () => {
  const { colors } = useTheme()
  const data = useContext( DataContext )

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
        items={ data.calendar }
        renderItem={ TaskCard }
        showOnlySelectedDayItems={ true }
      />
    </CustomView> 
  );
}

