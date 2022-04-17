import React, { useContext } from 'react'
import { StyleSheet, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { DataContext } from '../provider/context'

import { CustomView, TaskCard, AddButton } from '../components'

export default ({ route }) => {
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
