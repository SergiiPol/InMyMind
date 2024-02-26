import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import '../utils/i18n';
import ModaWindow from './ModaWindow';
import LanguageSelector from './LanguageSelector';
import SwitcherTheme from './SwitcherTheme';
import themeContext from '../styles/themeContext';

export default function ToolBar() {
    const theme = useContext(themeContext);
    return (
        <View style={styles.container}>
            <ModaWindow Icon= {<FontAwesome5 name="user" size={28} color={theme.color} />} />           
            <ModaWindow Icon= {<MaterialCommunityIcons name="theme-light-dark" size={28} color={theme.color} />} 
              Component={ <SwitcherTheme/> } />           
            <ModaWindow Icon= {<MaterialIcons  name="language" size={28} color={theme.color} />} 
              Component={ <LanguageSelector/> } />           
        </View>
    );
  }

  const styles = StyleSheet.create({
    container :{
        width: '90%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        padding: 5,
        backgroundColor: '#b44f1e',
        borderRadius: 10,
    },
  });