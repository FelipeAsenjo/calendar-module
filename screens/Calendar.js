import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { useTheme } from '@react-navigation/native';

import { DataContext } from '../provider/context'

import CustomView from '../components/CustomView';
import TaskCard from '../components/TaskCard'

const renderCalendar = ( data ) => {
    let agendaFormat = {}
    const withDate = data.filter( x => x.date )

    withDate.forEach(x => {
      Object.keys(agendaFormat).includes(x.date) ?
        agendaFormat[x.date].push(x) :
        agendaFormat[x.date] = [x]
    })

    return agendaFormat
  }

export default () => {
  const { colors } = useTheme()
  const { data } = useContext( DataContext )

  const formatedData = renderCalendar( data ) 

  console.log( formatedData )

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
        items={ formatedData } 
        renderItem={ TaskCard }
        showOnlySelectedDayItems={ true }
      />
    </CustomView> 
  );
}

