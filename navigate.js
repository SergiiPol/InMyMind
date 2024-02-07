import React from 'react';
import Main from './screens/Main';
import First from './screens/First';
import Second from './screens/Second';
import { createStackNavigator } from '@react-navigation/stack'; 
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name='Main'
                component={Main}
                options={{title: 'Главная'}}
            />
            <Stack.Screen 
                name='First'
                component={First}
                options={{title: 'Первая'}}
            />
            <Stack.Screen 
                name='Second'
                component={Second}
                options={{title: 'Вторая'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}