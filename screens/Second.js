import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { gStyles } from '../styles/style'

export default function Second() {

  return (
    <View style={gStyles.container}>
        <Text style={gStyles.title}>Second</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

});