import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

const Bus = ({ onBackToHome, onBusItemPress }) => {
    return (
        <View style={styles.container}>
            {/* Top Bar with Back Button and Title */}
            <View style={styles.header}>
                <TouchableOpacity style={[styles.backButton, styles.shadow]} onPress={onBackToHome}>
                    <Image
                        source={require('../../Components/Icons/BackArrow.png')}
                        style={[styles.backIcon, { tintColor: '#000' }]}
                    />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>BUS</Text>
                {/* A placeholder View to balance the layout */}
                <View style={{ width: 44, height: 44 }} />
            </View>

            {/* Search Bar */}
            <View style={[styles.searchBarContainer, styles.shadow]}>
                <Text style={styles.searchText}>Search</Text>
            </View>

            {/* Nearest Bus Stop Section */}
            <Text style={styles.sectionTitle}>Nearest bus stop</Text>
            <View style={[styles.busStopContainer, styles.shadowContainer]}>
                <View style={styles.busStopItem}>
                    <Image
                        source={require('../../Components/Icons/BusStop.png')}
                        style={[styles.busStopIcon, { tintColor: '#000' }]}
                    />
                    <View style={styles.busStopTextContainer}>
                        <Text style={styles.busStopName}>St Xaviers Technical Institute</Text>
                    </View>
                    <View style={styles.walkContainer}>
                        <Text style={styles.walkText}>2 mins away</Text>
                    </View>
                </View>
            </View>

            {/* Buses Near You Section */}
            <Text style={styles.sectionTitle}>Buses near you</Text>
            <ScrollView style={styles.busesNearYou}>
                <TouchableOpacity style={[styles.busItem, styles.shadowContainer]} onPress={onBusItemPress}>
                    <Image
                        source={require('../../Components/Icons/Bus.png')}
                        style={[styles.busIcon, { tintColor: '#000' }]}
                    />
                    <View style={styles.busInfo}>
                        <Text style={styles.busNumber}>A-376</Text>
                        <Text style={styles.busRoute}>To Mahim Bus Station</Text>
                    </View>
                    <Text style={styles.busTime}>In 7 min</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.busItem, styles.shadowContainer]} onPress={onBusItemPress}>
                    <Image
                        source={require('../../Components/Icons/Bus.png')}
                        style={[styles.busIcon, { tintColor: '#000' }]}
                    />
                    <View style={styles.busInfo}>
                        <Text style={styles.busNumber}>87</Text>
                        <Text style={styles.busRoute}>Bandra Colony Bus Station - Mantralaya</Text>
                    </View>
                    <Text style={styles.busTime}>In 7 min</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.busItem, styles.shadowContainer]} onPress={onBusItemPress}>
                    <Image
                        source={require('../../Components/Icons/Bus.png')}
                        style={[styles.busIcon, { tintColor: '#000' }]}
                    />
                    <View style={styles.busInfo}>
                        <Text style={styles.busNumber}>212</Text>
                        <Text style={styles.busRoute}>Bandra Reclamation Bus Station - Prabodha...</Text>
                    </View>
                    <Text style={styles.busTime}>In 7 min</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.busItem, styles.shadowContainer]} onPress={onBusItemPress}>
                    <Image
                        source={require('../../Components/Icons/Bus.png')}
                        style={[styles.busIcon, { tintColor: '#000' }]}
                    />
                    <View style={styles.busInfo}>
                        <Text style={styles.busNumber}>C-440</Text>
                        <Text style={styles.busRoute}>Wadala Depot - Borivali Station East</Text>
                    </View>
                    <Text style={styles.busTime}>In 7 min</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.busItem, styles.shadowContainer]} onPress={onBusItemPress}>
                    <Image
                        source={require('../../Components/Icons/Bus.png')}
                        style={[styles.busIcon, { tintColor: '#000' }]}
                    />
                    <View style={styles.busInfo}>
                        <Text style={styles.busNumber}>46</Text>
                        <Text style={styles.busRoute}>Dharavi Depot - Ferry Wharf</Text>
                    </View>
                    <Text style={styles.busTime}>In 7 min</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default Bus;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    backButton: {
        backgroundColor: '#ffffffff',
        borderRadius: 15,
        padding: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
    },
    backIcon: {
        width: 24,
        height: 24,
        tintColor: '#000',
    },
    headerTitle: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
        position: 'absolute',
        alignSelf: 'center',
        left: 0,
        right: 0,
        textAlign: 'center',
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffffff',
        borderRadius: 20,
        height: 50,
        paddingHorizontal: 15,
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
        width: 360,
        alignSelf: 'center',
    },
    searchText: {
        color: '#888',
        fontSize: 16,
    },
    sectionTitle: {
        color: '#000',
        fontSize: 18,
        paddingLeft: 5,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    busStopContainer: {
        backgroundColor: '#ffffffff',
        borderRadius: 20,
        width: 360,
        alignSelf: 'center',
        padding: 15,
        marginBottom: 20,
    },
    busStopItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    busStopIcon: {
        width: 24,
        height: 24,
        marginRight: 15,
        tintColor: '#000',
    },
    busStopTextContainer: {
        flex: 1,
    },
    busStopName: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    busNumber: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    busDestination: {
        color: '#555',
        fontSize: 14,
    },
    walkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    walkIcon: {
        width: 16,
        height: 16,
        tintColor: '#000',
        marginRight: 5,
    },
    walkText: {
        color: '#000',
        fontSize: 12,
    },
    busesNearYou: {
        // No changes needed here
    },
    busItem: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: 360,
        backgroundColor: '#ffffffff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
    },
    busIcon: {
        width: 24,
        height: 24,
        marginRight: 15,
        tintColor: '#000',
    },
    busInfo: {
        flex: 1,
    },
    busRoute: {
        color: '#555',
        fontSize: 14,
    },
    busTime: {
        color: '#007bff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    shadowContainer: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    }
});