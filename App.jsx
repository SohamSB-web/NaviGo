import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import LogIn from './Screens/Login/Login';
import GetStarted from './Screens/GetStarted/GetStarted';
import HomePage from './Screens/HomePage/Home';
import Bus from './Screens/Bus/Bus';
import MapPage from './Screens/Maps/Maps';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const [currentPage, setCurrentPage] = useState('getStarted');

  const handleGetStarted = () => {
    setCurrentPage('login');
  };

  const handleLogin = () => {
    setCurrentPage('home');
  };

  const handleBusPress = () => {
    setCurrentPage('bus');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  const handleBusItemPress = () => {
    setCurrentPage('map');
  };

  const handleBackToBus = () => {
    setCurrentPage('bus');
  };

  const renderPage = () => {
    if (currentPage === 'getStarted') {
      return <GetStarted onGetStarted={handleGetStarted} />;
    } else if (currentPage === 'login') {
      return <LogIn onLogin={handleLogin} />;
    } else if (currentPage === 'home') {
      return <HomePage onBusPress={handleBusPress} />;
    } else if (currentPage === 'bus') {
      return <Bus onBackToHome={handleBackToHome} onBusItemPress={handleBusItemPress} />;
    } else if (currentPage === 'map') {
      return <MapPage onBackToBus={handleBackToBus} />;
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