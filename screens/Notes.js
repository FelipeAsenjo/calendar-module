import React, { useContext, useState } from 'react'
import { StyleSheet, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { DataContext } from '../provider/context'

import CustomView from '../components/CustomView'
import TaskCard from '../components/TaskCard'
import AddButton from '../components/AddButton'
import ModalCreateSchedule from '../components/ModalCreateSchedule'

export default ({ route }) => {
  const [modalVisibility, setModalVisibility] = useState(false)
  const { colors } = useTheme()
  const { data } = useContext( DataContext )

  const notes = data.filter( x => !x.date && !x.isTodo ).sort((a, b) => b.priority - a.priority)
  const renderItem = ({ item }) => <TaskCard item={ item } route={ route.name } key={ item.id } />

  return (
    <CustomView style={ [styles.container, {backgroundColor: colors.primary}] }>
      <FlatList 
        data={notes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <AddButton 
        setModalVisibility={setModalVisibility}
      />
      <ModalCreateSchedule 
        visible={modalVisibility}
        setVisibility={setModalVisibility}
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
