import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import Modal from './Modal'
import FormButton from './FormButton'
import DateTimePicker from './DateTimePicker'
import { createNewTask } from '../utils/taskModifiers'
import { toCalendar } from '../reducers/tasks'

export default ({ visible, setVisibility, id }) => {
    const [formInfo, setFormInfo] = useState({})
    const dispatch = useDispatch()

    const handleCancel = () => setVisibility(false)

    const handleSubmit = () => {
      dispatch(toCalendar(id, formInfo.date, formInfo.time))
      setVisibility(false)
    }
 
    const handleChange = (text, name) => {
        setFormInfo({
            ...formInfo,
            [name]: text,
        })
    }

    return (
    <Modal visible={visible} title='Create Task'>
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
      <View style={styles.buttonContainer}>
        <FormButton text='Cancel' color='primary' onPress={handleCancel} />
        <FormButton text='Submit' color='secondary' onPress={handleSubmit}/>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
})
