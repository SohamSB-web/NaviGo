import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import LogIn from './Screens/Login/Login';
import GetStarted from './Screens/GetStarted/GetStarted';
import HomePage from './Screens/HomePage/Home';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const [currentPage, setCurrentPage] = useState('getStarted'); // New state variable

  const handleGetStarted = () => {
    setCurrentPage('login');
  };

  const handleLogin = () => {
    setCurrentPage('home');
  };

  const renderPage = () => {
    if (currentPage === 'getStarted') {
      return <GetStarted onGetStarted={handleGetStarted} />;
    } else if (currentPage === 'login') {
      return <LogIn onLogin={handleLogin} />;
    } else if (currentPage === 'home') {
      return <HomePage />;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {renderPage()}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  
});