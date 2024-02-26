import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import '../utils/i18n';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { gStyles } from '../styles/style'; 

export default function LanguageSelector () {
  const FlagRu = <Image source={require("../assets/icons/ru.png")} />;
  const FlagEs = <Image source={require("../assets/icons/es.png")} />;
  const FlagEn = <Image source={require("../assets/icons/gb.png")} />;
  const [currentLanguage, setCurrentLanguage] = useState('')
  const {t, i18n} = useTranslation();
  
  const loadLanguageFromStorage = async () => {
      try {  
        const value = await AsyncStorage.getItem('language');
        setCurrentLanguage(value);
        if (value !== null) {
          await AsyncStorage.setItem('language', value);
          setCurrentLanguage(value);
          i18n.changeLanguage(value);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      loadLanguageFromStorage();
    }, []);
  
  const changeLanguage = value => {
      i18n.changeLanguage(value)
      .then( () => {
          AsyncStorage.setItem('language', value);
          setCurrentLanguage(value);
      })
      .catch((
          (err) => {
              console.log(err);
          }
      ))
  }
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={() => changeLanguage('es')}
              style={[styles.itemButtom, {backgroundColor: currentLanguage === 'es' ? '#e7e6e2' : 'transparent'}]}>
                  { FlagEs }
              <Text style={gStyles.textMedium}>es</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeLanguage('en')}
              style={[styles.itemButtom, {backgroundColor: currentLanguage === 'en' ? '#e7e6e2' : 'transparent'}]}>
                  { FlagEn }
              <Text style={gStyles.textMedium}>en</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeLanguage('ru')}
              style={[styles.itemButtom, {backgroundColor: currentLanguage === 'ru' ? '#e7e6e2' : 'transparent'}]}>
                  { FlagRu }
              <Text style={gStyles.textMedium}>ru</Text>
          </TouchableOpacity>
      </View>
    );
}
  
const styles = StyleSheet.create({
    container :{
      position: 'relative',
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        borderRadius: 5,
    },
    itemButtom: {
        flexDirection: 'row',
        width: 100,
        height: 35,
        alignItems: 'center',
        margin: 16,
        paddingLeft: 15,
        gap: 7,
        borderRadius: 5,
    }
});