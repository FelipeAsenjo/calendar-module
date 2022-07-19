import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { formatDate, formatTime, capitalize } from "../utils/taskModifiers";

export default ({ mode, setFieldValue }) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [timeLoaded, setTimeLoaded] = useState(false);
  const { colors } = useTheme();

  const handleChange = (event, selectedDate) => {
    const currentDate = selectedDate ?? date;

    setTimeLoaded(true);
    setShowPicker(false);
    setDate(currentDate);

    if (mode === "date") return setFieldValue(currentDate);
    if (mode === "time" && timeLoaded) return setFieldValue(currentDate);
    setFieldValue(null)
  };

  const showButtonData = () => {
    if (mode === "date") return formatDate(date);
    if (timeLoaded) return formatTime(date);
    return " -- : -- : -- ";
  };

  return (
    <>
      <View>
        <Text style={styles.text}>{capitalize(mode)}</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={() => setShowPicker(true)}
        >
          <Text style={[styles.buttonText, { color: colors.light }]}>
            {showButtonData()}
          </Text>
        </TouchableOpacity>
      </View>
      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={handleChange}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: "flex-start",
    fontSize: 20,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    width: 150,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
