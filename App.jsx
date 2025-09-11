import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import LogIn from './Screens/Login/Login';
import GetStarted from './Screens/GetStarted/GetStarted';
import HomePage from './Screens/HomePage/Home';
import Bus from './Screens/Bus/Bus';
import MapPage from './Screens/Maps/Maps';
import Driver from './Screens/DriverHome/Driver';
import Services from './Screens/Services/Services';
import Saved from './Screens/Saved/Saved';
import Profile from './Screens/Profile/Profile';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const [currentPage, setCurrentPage] = useState('getStarted');

  const handleGetStarted = () => {
    setCurrentPage('login');
  };

  const handleLogin = (role) => {
    if (role === 'user') {
      setCurrentPage('home');
    } else if (role === 'driver') {
      setCurrentPage('driver');
    }
  };

  const handleLogout = () => {
    setCurrentPage('login');
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

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === 'getStarted') {
      return <GetStarted onGetStarted={handleGetStarted} />;
    } else if (currentPage === 'login') {
      return <LogIn onLogin={handleLogin} />;
    } else if (currentPage === 'home') {
      return <HomePage 
        onBusPress={handleBusPress} 
        onServicesPress={() => navigateTo('services')}
        onSavedPress={() => navigateTo('saved')}
        onProfilePress={() => navigateTo('profile')}
        currentPage={currentPage}
      />;
    } else if (currentPage === 'driver') {
      return <Driver onLogout={handleLogout} />;
    } else if (currentPage === 'bus') {
      return <Bus onBackToHome={handleBackToHome} onBusItemPress={handleBusItemPress} />;
    } else if (currentPage === 'map') {
      return <MapPage onBackToBus={handleBackToBus} />;
    } else if (currentPage === 'services') {
        return <Services onBackToHome={handleBackToHome} onNavigate={navigateTo} currentPage={currentPage} />;
    } else if (currentPage === 'saved') {
        return <Saved onBackToHome={handleBackToHome} onNavigate={navigateTo} currentPage={currentPage} />;
    } else if (currentPage === 'profile') {
        return <Profile onBackToHome={handleBackToHome} onNavigate={navigateTo} currentPage={currentPage} />;
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