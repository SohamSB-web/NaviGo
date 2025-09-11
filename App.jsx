import { StyleSheet, Text, View, BackHandler, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
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
  const [history, setHistory] = useState(['getStarted']);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setHistory((prevHistory) => [...prevHistory, page]);
  };

  const handleLogin = (role) => {
    if (role === 'user') {
      setCurrentPage('home');
      setHistory((prevHistory) => [...prevHistory, 'home']);
    } else if (role === 'driver') {
      setCurrentPage('driver');
      setHistory((prevHistory) => [...prevHistory, 'driver']);
    }
  };

  const onBackPress = () => {
    // If the user is on the Home or Driver page, let the default back button behavior (exiting the app) happen
    if (currentPage === 'home' || currentPage === 'driver' || currentPage === 'getStarted' || currentPage === 'login') {
      BackHandler.exitApp();
      return true; // Return true to indicate we've handled the event
    }

    // For all other pages, navigate back to the previous screen
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setCurrentPage(newHistory[newHistory.length - 1]);
      setHistory(newHistory);
      return true; // Return true to indicate we've handled the event
    }

    return false; // Let the default behavior (exit app) happen if no history
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () => backHandler.remove();
  }, [currentPage, history]); // Re-run effect when currentPage or history changes

  const renderPage = () => {
    switch (currentPage) {
      case 'getStarted':
        return <GetStarted onGetStarted={() => navigateTo('login')} />;
      case 'login':
        return <LogIn onLogin={handleLogin} />;
      case 'home':
        return <HomePage
          onBusPress={() => navigateTo('bus')}
          onServicesPress={() => navigateTo('services')}
          onSavedPress={() => navigateTo('saved')}
          onProfilePress={() => navigateTo('profile')}
          currentPage={currentPage}
        />;
      case 'driver':
        return <Driver onLogout={() => navigateTo('login')} />;
      case 'bus':
        return <Bus onBackToHome={() => navigateTo('home')} onBusItemPress={() => navigateTo('map')} />;
      case 'map':
        return <MapPage onBackToBus={() => navigateTo('bus')} />;
      case 'services':
        return <Services onNavigate={navigateTo} currentPage={currentPage} />;
      case 'saved':
        return <Saved onNavigate={navigateTo} currentPage={currentPage} />;
      case 'profile':
        return <Profile onNavigate={navigateTo} currentPage={currentPage} />;
      default:
        return null;
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
  // Your styles here
});