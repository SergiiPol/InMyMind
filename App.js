import React, { useState, useEffect }  from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Navigate from './navigate';
import { EventRegister } from 'react-native-event-listeners';
import { gStyles } from './styles/style';
import themeContext from './styles/themeContext';

export default function App() {
  const [mode, setMode] = useState(false);
  useEffect(() => {
    let eventListener = EventRegister.addEventListener("changeTheme", (data) => {
        setMode(data);
    });
    return () => {
        EventRegister.removeEventListener(eventListener);
    };
});
  const [fontsLoaded] = useFonts({
    "roboto-bold": require("./assets/fonts/roboto/Roboto-Bold.ttf"),
    "roboto-light": require("./assets/fonts/roboto/Roboto-Light.ttf"),
    "rubik-bold": require("./assets/fonts/rubik/Rubik-Bold.ttf"),
    "rubik-light": require("./assets/fonts/rubik/Rubik-Light.ttf"),
    "rubik-medium": require("./assets/fonts/rubik/Rubik-Medium.ttf")
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <themeContext.Provider 
      value={mode === true ? gStyles.dark : gStyles.light}
      >
      <Navigate /> 
    </themeContext.Provider>
  );
}
