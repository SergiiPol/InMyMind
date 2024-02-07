import React, { useEffect }  from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Navigate from './navigate';

export default function App() {
  const [fontsLoaded] = useFonts({
    "roboto-bold": require("./assets/fonts/roboto/Roboto-Bold.ttf"),
    "roboto-light": require("./assets/fonts/roboto/Roboto-Light.ttf"),
    "rubik-bold": require("./assets/fonts/rubik/Rubik-Bold.ttf"),
    "rubik-light": require("./assets/fonts/rubik/Rubik-Light.ttf")
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
      <Navigate /> 
  );
}
