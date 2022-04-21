import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Modal from './Modal'
import Switch from './Switch'
import FormInput from './FormInput'
import DateTimePicker from './DateTimePicker'
import FormButtonGroup from './FormButtonGroup'

export default ({ visible, setVisibility }) => {
  const [formInfo, setFormInfo] = useState({})
  const [isRoutine, setIsRoutine] = useState(false)

  const handleChange = (text, name) => {
    setFormInfo({
      ...formInfo,
      [name]: text,
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
      <FormInput 
        autoFocus={true} 
        name='title' 
        text='Title' 
        onChangeText={(text) => handleChange(text, 'title')} 
      />
      <FormInput 
        name='description' 
        text='Description' 
        onChangeText={(text) => handleChange(text, 'description')} 
      />
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
      <View style={ styles.buttonContainer }>
        <Switch 
          name='isBirthday'
          toForm={handleChange}
        />
        <Switch 
          name='isRoutine'
          toForm={handleChange}
        />
      </View>
      <FormButtonGroup 
        isAvailable={isRoutine}
      />
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
