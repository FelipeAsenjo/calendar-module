import React, { useContext } from 'react'
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { DataContext } from '../provider/context'

import CustomView from '../components/CustomView';
import TaskCard from '../components/TaskCard';
import AddButton from '../components/AddButton'

export default ({ route }) => {
  const { colors } = useTheme()
  const { data } = useContext( DataContext )

  const todos = data.filter( x => x.isTodo )
  
  return (
    <CustomView style={ [styles.container, {backgroundColor: colors.primary}] }>
      { todos.map( todo => <TaskCard item={ todo } route={ route.name } key={ todo.id } /> ) }
      <AddButton />
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
