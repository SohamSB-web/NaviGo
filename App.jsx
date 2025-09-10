import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LogIn from './Screens/Login/Login'
import GetStarted from './Screens/GetStarted/GetStarted'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1 }}>
      <GetStarted />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({

})