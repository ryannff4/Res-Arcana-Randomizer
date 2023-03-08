import React, { Component, useState } from 'react';
import type { PropsWithChildren } from 'react';
import CheckBox from '@react-native-community/checkbox';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function RadioGroupComponent() {

    const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>([
        {
            id: '2', // acts as primary key, should be unique and non-empty string
            label: '2',
            value: '2',
            onPress: () => setNumberOfPlayers(2)
        },
        {
            id: '3', // acts as primary key, should be unique and non-empty string
            label: '3',
            value: '3',
            onPress: () => setNumberOfPlayers(3)
        },
        {
            id: '4', // acts as primary key, should be unique and non-empty string
            label: '4',
            value: '4',
            onPress: () => setNumberOfPlayers(4)
        },
        {
            id: '5', // acts as primary key, should be unique and non-empty string
            label: '5',
            value: '5',
            onPress: () => setNumberOfPlayers(5)
        }
    ]);

    function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
        setRadioButtons(radioButtonsArray);
    }

    <View>
        <Text>Number of players</Text>
        <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            layout='row'
        />
    </View>
}