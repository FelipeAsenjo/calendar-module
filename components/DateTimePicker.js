import { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import DateTimePicker from '@react-native-community/datetimepicker';

import { formatDate, formatTime } from '../utils/taskModifiers'

export default ({ mode, toForm, ...rest }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const { colors } = useTheme()

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate

    setShow(false);
    setDate(currentDate);
  };

  useEffect(() => {
    console.log(date)
    let formatedData
    switch(mode) {
      case 'date':
        formatedData = formatDate(date)
        break
      case 'time':
        formatedData = formatTime(date)
        break
    }

    toForm(formatedData, mode)
  }, [date])

  const showMode = () => {
    setShow(true);
  };

  const capitalize = word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  return (
    <>
      <View>
        <Text style={ styles.text }>{ capitalize(mode) }</Text>
        <TouchableOpacity
          style={[ styles.button, {backgroundColor: colors.primary} ]}
          onPress={showMode}
        >
          <Text 
            style={[ styles.buttonText, { color: colors.light } ]}
          >
            { mode === 'date' ? formatDate(date) : ' -- : -- : -- ' }
          </Text>
        </TouchableOpacity>
      </View>
      {show && (
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
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'flex-start',
    fontSize: 20
  },
  button: {
    padding: 15,
    borderRadius: 10,
    width: 150,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
