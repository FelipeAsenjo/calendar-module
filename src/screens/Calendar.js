import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Agenda } from 'react-native-calendars'
import { useTheme } from '@react-navigation/native';

import CustomView from '../components/CustomView'
import TaskCard from '../components/TaskCard'
import AddButton from '../components/AddButton'
import ModalCreateSchedule from '../components/ModalCreateSchedule'

const renderCalendar = data => {
    let agendaFormat = {}

    const withDate = data.filter( x => x.date )
      .sort((a, b) => b.priority - a.priority)

    withDate.forEach(x => {
      Object.keys(agendaFormat).includes(x.date) ?
        agendaFormat[x.date].push(x) :
        agendaFormat[x.date] = [x]
    })

    return agendaFormat
  }

const Calendar = ({ route, data }) => {
  const [modalVisibility, setModalVisibility] = useState(false)
  const { colors } = useTheme()

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
        renderItem={( item ) => <TaskCard 
            item={ item } 
            route={ route.name } 
          />
        }
        showOnlySelectedDayItems={ true }
      />
      <AddButton 
        setModalVisibility={setModalVisibility}
      />
      <ModalCreateSchedule 
        visible={modalVisibility}
        setVisibility={setModalVisibility}
        route={route.name}
      />

    </CustomView> 
  );
}

const mapStateToProps = state => {
  return { data: state.tasks }
}

export default connect(mapStateToProps)(Calendar)