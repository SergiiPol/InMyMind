import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../styles/themeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { gStyles } from "../styles/style";

export default function SwitcherTheme() {
    const [mode, setMode] = useState(false);
    const theme = useContext(themeContext);
    const { t } = useTranslation();
    
    useEffect(() => {
        AsyncStorage.getItem('mode')
          .then((value) => {
            if (value !== null) {
              const mode = JSON.parse(value);
              setMode(mode);
            }
          });
    }, []);
      
    const onModeChange = () => {
        const newMode = !mode;
        AsyncStorage.setItem('mode', JSON.stringify(newMode));
        EventRegister.emit("changeTheme", newMode);
        setMode(newMode);
    };
       
    return (
        <View  style={[styles.containerWrapper, {backgroundColor: theme.backgroundColor.primary}]}>
            <Text style={[gStyles.textMedium, {color: theme.color} ]}>{t('ToggleTheme')}</Text> 
                <TouchableOpacity
                    style={[styles.button, {borderColor: theme.borderColor}]}
                    onPress={onModeChange}
                >
                    <Text style={[styles.buttonText, gStyles.textMedium, {color: theme.color} ]}>toggle</Text>
                <Text style={[gStyles.textMedium, {color: theme.color} ]}>
                    {mode ? <Feather name="sun" size={34} color={theme.color} /> 
                          : <FontAwesome name="moon-o" size={34} color={theme.color} /> }
                </Text>
                </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    containerWrapper: {
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 5,
    },
    button: {
        color: '#fff',
        padding: 7,
        margin: 25,
        alignItems: 'center',
        borderBottomWidth: 3,
        borderTopWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderRadius: 5,
    }
});
