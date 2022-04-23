import { useState, useContext, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import Modal from './Modal'
import DateTimePicker from './DateTimePicker'

import { DataContext, SelectedValueContext } from '../provider/context'
import { findInData, dataWithoutFinded } from '../utils/taskModifiers'

export default ({ visible, setVisibility, task }) => {
    const { data, setData } = useContext( DataContext )
    const { selectedItem, setSelectedItem } = useContext( SelectedValueContext )
    const [formInfo, setFormInfo] = useState({})

    useEffect(() => {
        setFormInfo(selectedItem)
    }, [])

    const handleChange = (text, name) => {
        const { id } = selectedItem
        const filteredData = dataWithoutFinded( data, id )
        setFormInfo({
            ...formInfo,
            [name]: text,
            isTodo: false
        })

        //console.log(formInfo)
    }

    return (
    <Modal 
      visible={visible} 
      setVisibility={setVisibility} 
      title='Create Task'
      formInfo={formInfo}
      setFormInfo={setFormInfo}
    >
      <View style={ styles.buttonContainer }>
        <DateTimePicker 
          mode='date' 
          toForm={handleChange}
        />
        <DateTimePicker 
          mode='time' 
          toForm={handleChange}
        />
      </View>
    </Modal>
    )
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
})
