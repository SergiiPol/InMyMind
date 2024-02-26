import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { gStyles } from '../styles/style';
import '../utils/i18n';
import { useTranslation } from 'react-i18next';
import ToolBar from '../components/ToolBar';
import themeContext from '../styles/themeContext';

export default function Main({ navigation }) {
  const { t } = useTranslation();
  const theme = useContext(themeContext);
  return (
    <View style={gStyles.container}>
        <Text style={gStyles.title}> {t('Главная страница')} </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Azenk')}>
            <Text> {t('тест Айзенка')} </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Second')}>
            <Text> {t('Вторая')} </Text>
        </TouchableOpacity>
      <StatusBar style='auto' />
      <ToolBar/>
    </View>
  );
}

const styles = StyleSheet.create({

});