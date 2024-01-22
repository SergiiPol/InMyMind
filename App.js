import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// expo install expo-font expo-splash-screen

export default function App() {
  const [fontsLoaded] = useFonts({
    "roboto-bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "roboto-light": require("./assets/fonts/Roboto/Roboto-Light.ttf"),
    "rubik-bold": require("./assets/fonts/Rubik/Rubik-Bold.ttf"),
    "rubik-light": require("./assets/fonts/Rubik/Rubik-Light.ttf")
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
    <View style={styles.container}>
      <Text style={{ fontFamily: "roboto-bold", fontSize: 30 }}>Lemon Love Font</Text>
      <Text style={{ fontFamily: "rubik-bold", fontSize: 30 }}>Lemon Love Font</Text>
      <Text style={{ fontFamily: "roboto-light", fontSize: 30 }}>Milky Coffee Font</Text>
      <Text style={{ fontFamily: "rubik-light", fontSize: 30 }}>Milky Coffee Font</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});