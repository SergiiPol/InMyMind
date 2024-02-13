import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { gStyles } from '../styles/style';
import '../utils/i18n';
import { useTranslation } from 'react-i18next';
import ToolBar from '../components/ToolBar';

export default function Main({ navigation }) {
  const { t } = useTranslation();
  return (
    <View style={gStyles.container}>
        <Text style={gStyles.title}> {t('Главная страница')} </Text>
        <TouchableOpacity onPress={() => navigation.navigate('First')}>
            <Text> {t('Первая')} </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Second')}>
            <Text> {t('Вторая')} </Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
      <ToolBar/>
    </View>
  );
}

const styles = StyleSheet.create({

});