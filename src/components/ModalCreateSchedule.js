import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Modal from './Modal'
import FormInput from './FormInput'
import DateTimePicker from './DateTimePicker'

// crear un formulario aparte para routines y cumpleanos 
// desde la pantalla calendar en el dropdown menu, 
// agregar "action button" desde el calendario para presentar
// las 3 opciones (simple schedule, birthday or routine)
// luego en el menu lateral, agregar seccion a parte 
// para agregar y borrar tags y routines

export default ({ visible, setVisibility, route }) => {
  const [formInfo, setFormInfo] = useState({})

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
      from='createTask'
      formInfo={formInfo}
      setFormInfo={setFormInfo}
      route={route}
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
