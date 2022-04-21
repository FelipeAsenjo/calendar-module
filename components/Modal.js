import { StyleSheet, View, Text, Modal, Dimensions } from 'react-native';
import FormButton from './FormButton'

export default ({ children, visible, setVisibility, title, data, setData }) => {
  const handleCancel = () => setVisibility(false)

  const handleSubmit = () => {
    console.log(data)

    //setVisibility(false)
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
