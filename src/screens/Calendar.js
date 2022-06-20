import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Agenda } from 'react-native-calendars'
import { useTheme } from '@react-navigation/native';

import CustomView from '../components/CustomView'
import TaskItem from '../components/TaskItem'
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

export default ({ route }) => {
  const data = useSelector( state => state.tasks )
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
        renderItem={( item ) => <TaskItem 
            item={ item } 
            route={ route.name } 
          />
        }
        //markingType={'multi-dot'}
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

