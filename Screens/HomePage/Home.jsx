import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Home = ({ onBusPress, onServicesPress, onSavedPress, onProfilePress }) => {
  const [activeTab, setActiveTab] = useState('Home');

  // Helper function to handle tab presses
  const handleTabPress = (tabName, onPressFunction) => {
    setActiveTab(tabName);
    if (onPressFunction) {
      onPressFunction();
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        
        {/* Gradient Header */}
        <LinearGradient
          colors={['#3d3d3dff', '#000000ff']}
          style={styles.headerGradient}
        >
          {/* Your Profile Section inside gradient */}
          <View style={styles.profileContainer}>
            <Image
              source={require('../../Components/Icons/Profile.png')}
              style={styles.profileImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.greetingText}>Navigate Journey</Text>
              <Text style={styles.appNameText}>Using NaviGo</Text>
            </View>
          </View>
        </LinearGradient>

        {/* White Container */}
        <View style={styles.whiteContainer}>
          {/* Services Section */}
          <Text style={styles.suggestionsText}>Services</Text>
          <View style={styles.suggestionsContainer}>
            <TouchableOpacity style={styles.suggestionItem} onPress={() => handleTabPress('Bus', onBusPress)}>
              <Image source={require('../../Components/Icons/BusIcon.png')} style={styles.BusIcon} />
              <Text style={styles.suggestionText}>Bus</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.suggestionItem}>
              <Image source={require('../../Components/Icons/TrainIcon.png')} style={styles.TrainIcon} />
              <Text style={styles.suggestionText}>Train</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.suggestionItem}>
              <Image source={require('../../Components/Icons/MetroIcon.png')} style={styles.MetroIcon} />
              <Text style={styles.suggestionText}>Metro</Text>
            </TouchableOpacity>
          </View>

          {/* Explore Section */}
          <LinearGradient
            colors={['#1c1c1c', '#333333']}
            style={styles.exploreContainer}
          >
            <Text style={styles.exploreTitle}>Explore{"\n"}NaviGo</Text>
          </LinearGradient>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => handleTabPress('Home', () => setActiveTab('Home'))}>
          <Image
            source={require('../../Components/Icons/HomeIcon.png')}
            style={[styles.navIcon1, activeTab === 'Home' && { tintColor: '#000' }]}
          />
          <Text style={[styles.navText, activeTab === 'Home' && styles.navTextActive]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => handleTabPress('Services', onServicesPress)}>
          <Image
            source={require('../../Components/Icons/ServicesIcon.png')}
            style={[styles.navIcon1, activeTab === 'Services' && { tintColor: '#000' }]}
          />
          <Text style={[styles.navText, activeTab === 'Services' && styles.navTextActive]}>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => handleTabPress('Saved', onSavedPress)}>
          <Image
            source={require('../../Components/Icons/SavedIcon.png')}
            style={[styles.navIcon2, activeTab === 'Saved' && { tintColor: '#000' }]}
          />
          <Text style={[styles.navText, activeTab === 'Saved' && styles.navTextActive]}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => handleTabPress('Profile', onProfilePress)}>
          <Image
            source={require('../../Components/Icons/ProfileIcon.png')}
            style={[styles.navIcon2, activeTab === 'Profile' && { tintColor: '#000' }]}
          />
          <Text style={[styles.navText, activeTab === 'Profile' && styles.navTextActive]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
  },
  scrollView: {
    flex: 1,
  },
  headerGradient: {
    paddingHorizontal: 25,
    paddingVertical: 40,
    height: 250,
  },
  profileContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  profileImage: {
    width: 40,
    height: 40,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'flex-start',
  },
  greetingText: {
    color: '#bbb',
    fontSize: 20,
  },
  appNameText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  whiteContainer: {
    backgroundColor: '#fff',
    marginTop: -40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  suggestionsText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  suggestionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  suggestionItem: {
    backgroundColor: '#e0e0e0',
    borderRadius: 15,
    height : 140,
    alignItems: 'center',
    paddingVertical: 15,
    width: '30%',
  },
  BusIcon: {
    width: 80,
    height: 53,
    marginVertical: 10,
    marginBottom: 10,
  },
  TrainIcon: {
    width: 80,
    height: 53,
    marginVertical: 10,
    marginBottom: 10,
  },
  MetroIcon: {
    width: 80,
    height: 53,
    marginVertical: 10,
    marginBottom: 10,
  },
  suggestionText: {
    color: '#000',
    fontSize: 16,
  },
  exploreContainer: {
    backgroundColor: '#2b2b2e',
    borderRadius: 20,
    height: 190,
    padding: 20,
    marginBottom: 20,
  },
  exploreTitle: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
  },
  bottomNav: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#c3c3c3ff',
  },
  navItem: {
    alignItems: 'center',
    marginTop: 10,
  },
  navIcon1: {
    width: 20,
    height: 20,
    tintColor: '#888',
  },
  navIcon2: {
    width: 18,
    height: 20,
    tintColor: '#888',
  },
  navText: {
    color: '#888',
    fontSize: 12,
    marginTop: 5,
  },
  navTextActive: {
    color: '#000',
  },
});