import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux'
import { useTheme } from '@react-navigation/native';

import CustomView from '../components/CustomView'
import TaskCard from '../components/TaskCard'
import AddButton from '../components/AddButton'
import ModalToCalendar from '../components/ModalToCalendar'
import ModalNewNoteTodo from '../components/ModalNewNoteTodo'

const Notes = ({ route, data }) => {
		const [addNewVisibility, setAddNewVisibility] = useState(false)
		const [toCalendarVisibility, setToCalendarVisibility] = useState(false)
    const [selectedItem, setSelectedItem] = useState()
		const { colors } = useTheme()

		const notes = data.filter( x => !x.date && !x.isTodo )
      .sort((a, b) => b.priority - a.priority)

		const renderItem = ({ item }) => {
		return <TaskCard 
						item={ item } 
						route={ route.name } 
						setVisibility={ setToCalendarVisibility } 
            setSelectedItem={ setSelectedItem }
						key={ item.id } 
				/>
		}

  return (
    <CustomView style={ [styles.container, {backgroundColor: colors.primary}] }>
      <FlatList 
        data={notes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <AddButton 
        setModalVisibility={setAddNewVisibility}
      />
      <ModalToCalendar
        visible={toCalendarVisibility}
        setVisibility={setToCalendarVisibility}
        selectedItem={selectedItem}
      />
      <ModalNewNoteTodo
        visible={addNewVisibility}
        setVisibility={setAddNewVisibility}
        route={route.name}
      />
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return { data: state.tasks }
}

export default connect(mapStateToProps)(Notes)
