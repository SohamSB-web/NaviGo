import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Bus = ({ onBackToHome, onBusItemPress }) => {
    const [searchText, setSearchText] = useState('');

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Gradient Header */}
                <LinearGradient
                    colors={['#3d3d3dff', '#000000ff']}
                    style={styles.headerGradient}
                >
                    {/* Back button, title, and search bar */}
                    <View style={styles.headerContainer}>
                        <TouchableOpacity style={styles.backButton} onPress={onBackToHome}>
                            <Image
                                source={require('../../Components/Icons/BackArrow.png')}
                                style={styles.backIcon}
                            />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>BUS</Text>
                        <View style={{ width: 44, height: 44 }} />
                    </View>
                    <View style={[styles.searchBarContainer, styles.shadow]}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search"
                            placeholderTextColor="#888"
                            value={searchText}
                            onChangeText={setSearchText}
                        />
                    </View>
                </LinearGradient>

                {/* White Container */}
                <View style={styles.whiteContainer}>
                    {/* Nearest Bus Stop Section */}
                    <Text style={styles.sectionTitle}>Nearest bus stop</Text>
                    <View style={[styles.busStopContainer, styles.shadowContainer]}>
                        <View style={styles.busStopItem}>
                            <Image
                                source={require('../../Components/Icons/BusStop.png')}
                                style={[styles.busStopIcon, { tintColor: '#000' }]}
                            />
                            <View style={styles.busStopTextContainer}>
                                <Text style={styles.busStopName}>Xaviers Technical Institute</Text>
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
            </ScrollView>
        </View>
    );
};

export default Bus;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffffff',
    },
    scrollView: {
        flex: 1,
    },
    headerGradient: {
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 25,
        height: 250, // Increased height to make the gradient container taller
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    backButton: {
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
    headerTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        // Align title with center while back button is present
        flex: 1,
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffffff',
        borderRadius: 30,
        height: 50,
        paddingHorizontal: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    searchInput: {
        flex: 1,
        color: '#000',
        fontSize: 16,
    },
    whiteContainer: {
        backgroundColor: '#fff',
        marginTop: -50,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 20,
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
        backgroundColor: '#ffffffff',
        borderRadius: 20,
        padding: 15,
        marginBottom: 10,
        marginRight: 5,
        marginLeft: 5,
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
