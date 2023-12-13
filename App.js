import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native' 
import { Provider } from 'react-redux'
import MyStore from './src/redux/MyStore'

import Landing from './src/screen/Landing'
import Login from './src/screen/Login'
import SignUp from './src/screen/SignUp'
import BottomTab from './src/screen/BottomTab'
import DetailScreen from './src/screen/DetailScreen'
import Settings from './src/screen/Settings' 


const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={MyStore}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name='Landing' component={Landing} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='BottomTab' component={BottomTab} />
          <Stack.Screen name='DetailScreen' component={DetailScreen} />
          <Stack.Screen name='Settings' component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
      
  )
}

export default App
