import React, { useContext } from 'react';
import Main from './screens/Main';
import Azenk from './screens/Azenk-EPQ-R';
import Second from './screens/Second';
import { createStackNavigator } from '@react-navigation/stack'; 
import { NavigationContainer } from '@react-navigation/native';
import themeContext from './styles/themeContext';

const Stack = createStackNavigator();

export default function Navigate() {
    const theme = useContext(themeContext);
    return <NavigationContainer 
        // theme={{colors: {background: '#63C2D1'}}}
        >
        <Stack.Navigator
            screenOptions={{ headerShown: false }}>
            <Stack.Screen 
                name='Main'
                component={Main}
                options={{title: 'Главная'}}
            />
            <Stack.Screen 
                name='Azenk'
                component={Azenk}
                options={{title: 'тест Айзенка'}}
            />
            <Stack.Screen 
                name='Second'
                component={Second}
                options={{title: 'Вторая'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}