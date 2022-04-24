import { useState } from 'react'
import { View } from 'react-native'
import Modal from './Modal'
import FormInput from './FormInput'
import DateTimePicker from './DateTimePicker'

export default ({ visible, setVisibility, route }) => {
  const [formInfo, setFormInfo] = useState({})

  const handleChange = (text, name) => {
    const isTodo = route === 'Todo' ? true : false

    setFormInfo({
      ...formInfo,
      [name]: text,
      isTodo
    })

    console.log(formInfo)
  }

  return (
    <Modal 
      visible={visible} 
      setVisibility={setVisibility} 
      title={`Create ${route.slice(0, -1)}`}
      formInfo={formInfo}
      setFormInfo={setFormInfo}
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
    </Modal>
  )
}

