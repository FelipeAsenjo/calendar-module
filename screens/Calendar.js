import React, { useContext } from 'react'
import { Agenda } from 'react-native-calendars'
import { useTheme } from '@react-navigation/native';

import { DataContext } from '../provider/context'

import CustomView from '../components/CustomView';
import CalendarCard from '../components/CalendarCard'
import AddButton from '../components/AddButton'

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
        renderItem={ CalendarCard }
        showOnlySelectedDayItems={ true }
      />
      <AddButton />
    </CustomView> 
  );
}

