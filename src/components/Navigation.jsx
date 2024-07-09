import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Tab } from '@rneui/base'

import FormLogin from "./components/FormLogin"
import HomeStack from './stack/HomeStack'

const tab = createBottomTabNavigator()
export default function Navigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <tab.Screen 
            name ="home"
            component={HomeStack}
            options={{title:'Inicio'}}
            />
            <tab.Screen 
            name ="avatar"
            component={FormLogin}
            options={{title:'Perfil'}}
            />
            
        </Tab.Navigator>
    </NavigationContainer>
  )
}