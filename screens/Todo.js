import React, { useContext, useState } from 'react'
import { StyleSheet, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { DataContext } from '../provider/context'

import CustomView from '../components/CustomView'
import TaskCard from '../components/TaskCard'
import AddButton from '../components/AddButton'
import Modal from '../components/Modal'
import ModalNewNoteTodo from '../components/ModalNewNoteTodo'

export default ({ route }) => {
  const [addNewVisibility, setAddNewVisibility] = useState(false)
  const { colors } = useTheme()
  const { data } = useContext( DataContext )

  const todos = data.filter( x => x.isTodo ).sort((a, b) => b.priority - a.priority)
  const renderItem = ({ item }) => <TaskCard item={ item } route={ route.name } key={ item.id } />
  
  return (
    <CustomView style={ [styles.container, {backgroundColor: colors.primary}] }>
      <FlatList 
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <AddButton 
        setModalVisibility={setAddNewVisibility}
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
