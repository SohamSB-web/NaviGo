import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import LogIn from './Screens/Login/Login';
import GetStarted from './Screens/GetStarted/GetStarted';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const [isStarted, setIsStarted] = useState(false);

  const handleGetStarted = () => {
    setIsStarted(true);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isStarted ? <LogIn /> : <GetStarted onGetStarted={handleGetStarted} />}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  
});