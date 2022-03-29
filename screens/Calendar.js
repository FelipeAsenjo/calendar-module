import React, { useEffect, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import CustomView from '../components/CustomView';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { useTheme } from '@react-navigation/native';

import { DataContext } from '../provider/context'

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
        items={ data }
        renderItem={ TaskCard }
        showOnlySelectedDayItems={ true }
      />
    </CustomView> 
  );
}

