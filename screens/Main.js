import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { gStyles } from '../styles/style'

export default function Main({ navigation }) {

  return (
    <View style={gStyles.container}>
        <Text style={gStyles.title}>Главная страница</Text>
        <TouchableOpacity onPress={() => navigation.navigate('First')}>
            <Text>First</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Second')}>
            <Text>Second</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

});