import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FormLogin from '../FormLogin'

const stack =createStackNavigator()
export default function HomeStack() {
  return (
    <stack.Navigator>
        <stack.Screen
        name="homeStack"
        component={FormLogin}
        options={{title:"inicio de Sesión"}}
        />
    </stack.Navigator>
  )
}