import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { gStyles } from '../styles/style';
import { useTranslation } from 'react-i18next';


export default function Second() {

  const { t } = useTranslation();

  return (
    <View style={gStyles.container}>
        <Text style={gStyles.title}>{t('Вторая')}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

});