import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Profile = ({ onBackToHome, onNavigate, currentPage }) => {

  const handleTabPress = (tabName) => {
    onNavigate(tabName);
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
              source={require('../../Components/Icons/ProfileIcon.png')}
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
          <Text style={styles.screenTitle}>Profile</Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => handleTabPress('home')}>
          <Image
            source={require('../../Components/Icons/HomeIcon.png')}
            style={[styles.navIcon1, currentPage === 'home' && { tintColor: '#000' }]}
          />
          <Text style={[styles.navText, currentPage === 'home' && styles.navTextActive]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => handleTabPress('services')}>
          <Image
            source={require('../../Components/Icons/ServicesIcon.png')}
            style={[styles.navIcon1, currentPage === 'services' && { tintColor: '#000' }]}
          />
          <Text style={[styles.navText, currentPage === 'services' && styles.navTextActive]}>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => handleTabPress('saved')}>
          <Image
            source={require('../../Components/Icons/SavedIcon.png')}
            style={[styles.navIcon2, currentPage === 'saved' && { tintColor: '#000' }]}
          />
          <Text style={[styles.navText, currentPage === 'saved' && styles.navTextActive]}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => handleTabPress('profile')}>
          <Image
            source={require('../../Components/Icons/ProfileIcon.png')}
            style={[styles.navIcon2, currentPage === 'profile' && { tintColor: '#000' }]}
          />
          <Text style={[styles.navText, currentPage === 'profile' && styles.navTextActive]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

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
    width: 36,
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
  screenTitle: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
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
