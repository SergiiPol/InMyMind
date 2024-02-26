import { StyleSheet } from "react-native";

export const gStyles = StyleSheet.create({
    light: {
        theme: 'light',
        color: '#1a1918',
        backgroundColor: {
            primary: "#d4a752",
            onPrimary: "#EFB786",
            primaryContainer: "rgb(156, 250, 81)",
            onPrimaryContainer: "rgb(12, 32, 0)",
        } ,
        borderColor: 'black'
    },
    dark: {
        theme: 'dark',
        color: '#F2F2F2',
        backgroundColor: {
            primary: "#1D0F0F",
            onPrimary: "#453C41",
            primaryContainer: "rgb(156, 250, 81)",
            onPrimaryContainer: "rgb(12, 32, 0)",
        },
        borderColor: 'white'
    },
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#d4a752',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '8%'
      },
    title: {
        fontSize: 30,
        color: '#1a1918',
        fontFamily: 'rubik-bold'
    },
    textMedium: {
        fontSize: 20,
        color: '#1a1918',
        fontFamily: 'rubik-medium'
    }
})