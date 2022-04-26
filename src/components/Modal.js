import { StyleSheet, View, Text, Modal, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import FormButton from './FormButton'

import { toCalendar, addTask, editTask } from '../reducers/tasks'
import { createNewTask } from '../utils/taskModifiers'

const CustomModal = (props) => {
  const { 
    children,
    visible,
    setVisibility,
    title,
    from,
    formInfo,
    id,
    toCalendar,
    add,
    edit
  } = props

  const handleCancel = () => setVisibility(false)

  const handleSubmit = () => {
    const templateItem = createNewTask()

    if(from === 'toCalendar') {
      toCalendar(id, formInfo.date, formInfo.time)
    }
    if(from === 'createTask') {
      const newItem = { ...templateItem, ...formInfo }
      addTask(newItem)
    }
    if(from === 'editTask') {
      editTask(id, modifiedItem)
    }

    setVisibility(false)
  }
  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <View style={ styles.centeredView }>
        <View style={ styles.modalView }>
          <Text style={styles.header}>{title}</Text>
          { children }
          <View style={styles.buttonContainer}>
            <FormButton text='Cancel' color='primary' onPress={handleCancel} />
            <FormButton text='Submit' color='secondary' onPress={handleSubmit}/>
          </View>
        </View>
      </View>
    </Modal>
  ) 
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    padding: 25,
    width: Dimensions.get('window').width - 35,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
})

const mapDispatchToProps = dispatch => ({
  toCalendar: (id, date, time) => dispatch(toCalendar(id, date, time)),
  edit: (id, modifiedItem) => dispatch(editTask(id, modifiedItem)),
  add: (newItem) => dispatch(addTask(newItem))
})

export default connect(null, mapDispatchToProps)(CustomModal)
