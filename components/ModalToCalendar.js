import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Modal from './Modal'
import DateTimePicker from './DateTimePicker'

export default ({ visible, setVisibility }) => {
  const [formInfo, setFormInfo] = useState({})

  const handleChange = (text, name) => {
    setFormInfo({
      ...formInfo,
      [name]: text,
      isTodo: false
    })

    console.log(formInfo)
  }

  return (
    <Modal 
      visible={visible} 
      setVisibility={setVisibility} 
      title='Create Task'
      data={formInfo}
      setData={setFormInfo}
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
