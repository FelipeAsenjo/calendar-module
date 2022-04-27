import React, { useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { useTheme } from '@react-navigation/native';

import CustomView from '../components/CustomView'
import TagsItem from '../components/TagsItem'

const Tags = ({ route, tags }) => {
  const { colors } = useTheme()

  const renderItem = ({ item }) => (
		    <TagsItem 
						item={ item } 
						route={ route.name } 
						//setVisibility={ setToCalendarVisibility } 
            //setSelectedItem={ setSelectedItem }
						key={ item.id } 
				/>
		)

  return (
    <CustomView style={ styles.container }>
      <FlatList 
        data={tags}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

    </CustomView> 
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = state => ({
  tags: state.tags
})

export default connect(mapStateToProps)(Tags)
