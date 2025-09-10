import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LogIn from './Screens/Login/Login'
import GetSatred from './Screens/GetStarted/GetStarted'

import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1 }}>
      <LogIn/> 
      
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({

})