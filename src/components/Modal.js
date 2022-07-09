import { StyleSheet, View, Text, Modal } from "react-native";
import CancelModalButton from "./CancelModalButton";

export default ({ children, visible, title, close }) => {
  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.centeredView}>
        <CancelModalButton onPress={close} />
        <View style={styles.fullScreenView}>
          <Text style={styles.header}>{title}</Text>
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  fullScreenView: {
    padding: 25,
    alignItems: "center",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
