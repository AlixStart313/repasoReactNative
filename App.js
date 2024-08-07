import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Tab } from '@rneui/base'


import HomeStack from './src/components/stack/HomeStack'

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

const styles = StyleSheet.create({
  containerStyle:{
    flex:1,
    paddingTop:16,
     flexDirection: 'column'
  },
  avatar: {
    paddingTop:55,
    paddingLeft:55,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  text_name: {
    fontWeight: 'bold',
  },
  text:{
    alignItems:'center',
  },
  text_container:{
    paddingTop:16,
    paddingLeft:16
  }
});
