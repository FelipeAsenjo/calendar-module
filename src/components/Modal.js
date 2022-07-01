import { StyleSheet, View, Text, Modal, Dimensions } from 'react-native';

export default ({ children, visible, title, transparency }) => {
  return (
    <Modal
      animationType="slide"
      transparent={ transparency }
      visible={ visible }
    >
      <View style={ transparency && styles.centeredView }>
        <View style={ transparency ? styles.modalView : styles.fullScreenView }>
          <Text style={ styles.header }>{title}</Text>
          { children }
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
  fullScreenView: {
    height: Dimensions.get('window').height,
    padding: 25,
    alignItems: "center",
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  }
})

