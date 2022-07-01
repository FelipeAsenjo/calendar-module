import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { formatDate, formatTime, capitalize } from "../utils/taskModifiers";

export default ({ mode, toForm }) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [timeLoaded, setTimeLoaded] = useState(false);
  const { colors } = useTheme();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate !== undefined ? selectedDate : date;

    setTimeLoaded(true);
    setShowPicker(false);
    setDate(currentDate);

    const formatedData =
      mode === "date"
        ? formatDate(currentDate)
        : timeLoaded
        ? formatTime(currentDate)
        : null;
    toForm(formatedData, mode);
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
            {mode === "date"
              ? formatDate(date)
              : !timeLoaded
              ? " -- : -- : -- "
              : formatTime(date)}
          </Text>
        </TouchableOpacity>
      </View>
      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
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
