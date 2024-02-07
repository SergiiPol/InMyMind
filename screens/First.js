import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { gStyles } from '../styles/style'

export default function First() {

  return (
    <View style={gStyles.container}>
        <Text style={gStyles.title}>First</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

});