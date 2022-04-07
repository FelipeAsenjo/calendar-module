import React, { useContext } from 'react'
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { DataContext } from '../provider/context'

import CustomView from '../components/CustomView';
import TaskCard from '../components/TaskCard';
import AddButton from '../components/AddButton'

export default () => {
  const { colors } = useTheme()
  const { data } = useContext( DataContext )

  const notes = data.filter( x => !x.date && !x.isTodo )

  return (
    <CustomView style={ [styles.container, {backgroundColor: colors.primary}] }>
      { notes.map( note => <TaskCard task={ note } key={ note.id } />) }
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
