import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import { useNavigation } from '@react-navigation/native'; // Remove this line

// const DriverPage = () => { // Change this line
const DriverPage = ({ onLogout }) => {
  const [locationSharing, setLocationSharing] = useState(true);
  // const navigation = useNavigation(); // Remove this line

  const handleLogout = () => {
    // navigation.navigate('login'); // Remove this line
    onLogout(); // Add this line
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerLineOne}>Navigate Journey</Text>
        <Text style={styles.headerLineTwo}>Using NaviGo</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Share your live location</Text>

        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              locationSharing && styles.toggleButtonActive,
            ]}
            onPress={() => setLocationSharing(true)}
          >
            <Text style={[
              styles.toggleText,
              locationSharing && styles.toggleTextActive
            ]}>Turned on</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.toggleButton,
              !locationSharing && styles.toggleButtonActive,
            ]}
            onPress={() => setLocationSharing(false)}
          >
            <Text style={[
              styles.toggleText,
              !locationSharing && styles.toggleTextActive
            ]}>Turned off</Text>
          </TouchableOpacity>
        </View>

        {/* Log Out Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <LinearGradient
            colors={['#111315', '#737373']}
            style={styles.gradient}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.logoutButtonText}>Log Out</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DriverPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    padding: 10,
    justifyContent: 'space-between',
  },
  headerContainer: {
    marginTop: 230,
    marginLeft: 30,
  },
  headerLineOne: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '400',
  },
  headerLineTwo: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '900',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#ffffff',
    height: 470,
    borderRadius: 40,
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
    // Remove 'justifyContent: 'space-between'',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    // Set bottom margin to create a 20-unit gap
    marginBottom: 20,
    marginLeft: 10,
    color: '#000',
    textAlign: 'left',
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    height: 50,
    padding: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 15,
    alignItems: 'center',
  },
  toggleButtonActive: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  toggleText: {
    fontWeight: 'normal',
    color: '#888',
  },
  toggleTextActive: {
    fontWeight: 'bold',
    color: '#000',
  },
  logoutButton: {
    borderRadius: 30,
    width: '100%',
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: 280,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  gradient: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});