import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LeafletView } from 'react-native-leaflet-view';

const DEFAULT_LOCATION = {
  latitude: 19.04526698375636,
  longitude: 72.84167157838552,
};

const Maps = ({ onBackToBus }) => {
  return (
    <View style={styles.container}>
      {/* Map View */}
      <LeafletView
        mapCenterPosition={{
          lat: DEFAULT_LOCATION.latitude,
          lng: DEFAULT_LOCATION.longitude,
        }}
        zoom={13}
        mapMarkers={[
          {
            position: {
              lat: DEFAULT_LOCATION.latitude,
              lng: DEFAULT_LOCATION.longitude,
            },
            icon: '📍',
            size: [32, 32],
          },
        ]}
      />

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={onBackToBus}>
        <Image
          source={require('../../Components/Icons/BackArrow.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Info Panel at the bottom */}
      <View style={styles.infoPanel}>
        <View style={styles.timeContainer}>
          <Image
            source={require('../../Components/Icons/Bus.png')}
            style={styles.timeIcon}
          />
          <View style={styles.timeTextContainer}>
            <Text style={styles.busName}>*XYZ Stop* arriving in 12 mins</Text>
            <Text style={styles.estimatedTime}>ESTIMATED TIME - 8:30 PM</Text>
          </View>
        </View>

        <View style={styles.busStopSection}>
          <Text style={styles.sectionTitle}>Nearest bus stop</Text>
          <View style={styles.busStopDetails}>
            <Image
              source={require('../../Components/Icons/BusStop.png')}
              style={styles.busStopIcon}
            />
            <View>
              <Text style={styles.busStopName}>Mahim Koliwada</Text>
              <Text style={styles.busStopType}>Bus Stop</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#000',
  },
  infoPanel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  timeIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
    tintColor: '#000',
  },
  timeTextContainer: {
    flex: 1,
  },
  busName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  estimatedTime: {
    fontSize: 14,
    color: '#888',
  },
  busStopSection: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 15,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  busStopDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  busStopIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
    tintColor: '#000',
  },
  busStopName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  busStopType: {
    fontSize: 14,
    color: '#555',
  },
});