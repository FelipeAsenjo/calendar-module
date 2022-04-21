import { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import RadioGroup from 'react-native-radio-buttons-group';

const radioButtonsData = disabled => {
    return [
        {
            id: '1',
            label: 'Daily',
            value: 'daily',
            disabled: !disabled,
        }, 
        {
            id: '2',
            label: 'Weekly',
            value: 'weekly',
            disabled: !disabled
        },
        {
            id: '3',
            label: 'Yearly',
            value: 'yearly',
            disabled: !disabled
        },
        {
            id: '4',
            label: 'Custom',
            value: 'custom',
            disabled: !disabled
        },
    ]
}
export default ({ isAvailable }) => {
    const [available, setAvailable] = useState(isAvailable)
    const [radioButtons, setRadioButtons] = useState(radioButtonsData(available))

    const onPressRadioButton = (radioButtonsArray) => {
        setRadioButtons(radioButtonsArray);
    }

    return (
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton} 
            layout='row'
            style={ styles.btnGroup }
        />
    );
}

const styles = StyleSheet.create({
    btnGroup: {
        maxWidth: '80%'
    }
})
