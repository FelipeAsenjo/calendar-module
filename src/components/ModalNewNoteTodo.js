import { useState } from 'react'
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
  }

  return (
    <Modal 
      visible={visible} 
      setVisibility={setVisibility} 
      title={`Create ${route.slice(0, -1)}`}
      from='createTask'
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
        multiline={true}
      />
    </Modal>
  )
}

