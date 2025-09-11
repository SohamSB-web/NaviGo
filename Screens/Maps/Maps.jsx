import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, PanResponder, Dimensions } from 'react-native';
import { LeafletView } from 'react-native-leaflet-view';

const { height } = Dimensions.get('window');
const snapPoints = {
  up: 0.9, // 90% of screen height
  half: 0.5, // 50% of screen height
  down: 0.3, // 30% of screen height
};

const DEFAULT_LOCATION = {
  latitude: 19.04526698375636,
  longitude: 72.84167157838552,
};

const busStops = [
  { id: 1, name: 'Mahim Koliwada', type: 'Bus Stop' },
  { id: 2, name: 'Sion Circle', type: 'Bus Stop' },
  { id: 3, name: 'Dadar Station (E)', type: 'Bus Stop' },
  { id: 4, name: 'Wadala Bridge', type: 'Bus Stop' },
  { id: 5, name: 'Parel Depot', type: 'Bus Stop' },
  { id: 6, name: 'King Circle', type: 'Bus Stop' },
  { id: 7, name: 'Bandra Terminus', type: 'Bus Stop' },
  { id: 8, name: 'Kurla Bus Depot', type: 'Bus Stop' },
  { id: 9, name: 'Andheri East', type: 'Bus Stop' },
  { id: 10, name: 'Powai Lake', type: 'Bus Stop' },
  { id: 11, name: 'Bandra Reclamation', type: 'Bus Stop' },
  { id: 12, name: 'Santacruz Station', type: 'Bus Stop' },
  { id: 13, name: 'Vile Parle', type: 'Bus Stop' },
  { id: 14, name: 'Airport Road', type: 'Bus Stop' },
  { id: 15, name: 'Marol Naka', type: 'Bus Stop' },
];

const MapsScreen = ({ onBackToBus }) => {
  const [panelHeight, setPanelHeight] = useState(height * snapPoints.down);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dy) > 5;
      },
      onPanResponderMove: (evt, gestureState) => {
        const newHeight = panelHeight - gestureState.dy;
        const clampedHeight = Math.min(Math.max(newHeight, height * snapPoints.down), height * snapPoints.up);
        setPanelHeight(clampedHeight);
      },
      onPanResponderRelease: (evt, gestureState) => {
        const currentHeightRatio = panelHeight / height;
        let nearestSnapPoint = snapPoints.down;

        if (currentHeightRatio > snapPoints.up - 0.1) {
          nearestSnapPoint = snapPoints.up;
        } else if (currentHeightRatio > snapPoints.half - 0.1) {
          nearestSnapPoint = snapPoints.half;
        }

        setPanelHeight(height * nearestSnapPoint);
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      {/* Map View */}
      <LeafletView
        mapCenterPosition={{
          lat: DEFAULT_LOCATION.latitude,
          lng: DEFAULT_LOCATION.longitude,
        }}
        zoom={50}
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

      {/* Draggable Info Panel */}
      <View
        style={[styles.infoPanel, { height: panelHeight }]}
        {...panResponder.panHandlers}
      >
        {/* Drag Handle */}
        <View style={styles.dragHandle} />

        {/* New unified header and content */}
        <ScrollView style={styles.contentScrollView}>
          <View style={styles.header}>
            <View style={styles.busIconContainer}>
                <Image
                    source={require('../../Components/Icons/Bus.png')}
                    style={styles.busIcon}
                />
            </View>
            <View style={styles.headerTextContainer}>
                <Text style={styles.busStopName}>Mahim Koliwada</Text>
                <Text style={styles.platformText}>Platform A</Text>
            </View>
            <View style={styles.timeInfo}>
                <Text style={styles.timeText}>09:43</Text>
                <View style={styles.onTimeTag}>
                    <Text style={styles.onTimeText}>On time</Text>
                </View>
            </View>
          </View>
          <View style={styles.separator} />

          <View style={styles.mainContent}>
            <View style={styles.sectionHeader}>
              <View style={styles.directionTag}>
                <Text style={styles.directionText}>40</Text>
              </View>
              <Text style={styles.directionTitle}>Arrival of stop</Text>
              <TouchableOpacity style={styles.dropdownIcon}>
                <Text style={{ fontSize: 24, color: '#aaa' }}>...</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.arrivalsSection}>
              <Text style={styles.arrivalsTitle}>Also at 09:48 and 09:53</Text>
              {/* This section would be a FlatList or map of other arrivals */}
            </View>

            <View style={styles.busStopSection}>
              <View style={styles.timelineContainer}>
                <View style={styles.mainTimelineLine} />
                <View style={styles.busTopIconContainer}>
                   <Image
                     source={require('../../Components/Icons/Bus.png')}
                     style={styles.busTopIcon}
                   />
                </View>
                {busStops.map((stop, index) => (
                  <View key={stop.id} style={styles.busStopItem}>
                    <View style={styles.timelinePoint} />
                    <View style={styles.busStopDetails}>
                      <Text style={styles.busStopName}>{stop.name}</Text>
                      <Text style={styles.busStopType}>{stop.type}</Text>
                    </View>
                  </View>
                ))}
                <View style={styles.endTimelinePoint} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MapsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 50,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    elevation: 5,
    zIndex: 10,
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
    paddingHorizontal: 20,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
  },
  dragHandle: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 2.5,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 20,
  },
  busIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  busIcon: {
    width: 30,
    height: 30,
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 15,
  },
  busStopName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  platformText: {
    fontSize: 16,
    color: '#888',
  },
  timeInfo: {
    alignItems: 'flex-end',
  },
  timeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  onTimeTag: {
    backgroundColor: '#e6f7e8',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  onTimeText: {
    color: '#4caf50',
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 10,
  },
  mainContent: {
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  directionTag: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#e91e63',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  directionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  directionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  dropdownIcon: {
    padding: 5,
  },
  arrivalsSection: {
    marginBottom: 20,
  },
  arrivalsTitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  busStopSection: {
    // No specific style needed here as it's a container
  },
  timelineContainer: {
    position: 'relative',
    paddingLeft: 20,
  },
  mainTimelineLine: {
    position: 'absolute',
    left: 30,
    top: 25,
    bottom: 5,
    width: 2,
    backgroundColor: '#e91e63',
    opacity: 0.2,
  },
  busTopIconContainer: {
    position: 'absolute',
    left: -12,
    top: -5,
    zIndex: 1,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  busTopIcon: {
    width: 30,
    height: 30,
  },
  endTimelinePoint: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#e91e63',
    position: 'absolute',
    left: 24,
    bottom: 0,
    zIndex: 2,
  },
  busStopItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    position: 'relative',
  },
  busStopDetails: {
    flex: 1,
    marginLeft: 20,
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
