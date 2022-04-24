import { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import RadioGroup from 'react-native-radio-buttons-group';

const radioButtonsData = [
        {
            id: '1',
            label: 'Daily',
            value: 'daily',
        }, 
        {
            id: '2',
            label: 'Weekly',
            value: 'weekly',
        },
        {
            id: '3',
            label: 'Yearly',
            value: 'yearly',
        },
        //{
            //id: '4',
            //label: 'Custom',
            //value: 'custom',
            //disabled: !disabled
        //},
]

export default ({ toForm }) => {
    const [radioButtons, setRadioButtons] = useState(radioButtonsData)

    const onPressRadioButton = (radioButtonsArray) => {
        setRadioButtons(radioButtonsArray);
        toForm(radioButtons, radioButtonsArray.value)
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
