import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Home = ({ onBusPress }) => {
    const [activeTab, setActiveTab] = useState('Home');

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {/* Profile Section */}
                <View style={styles.profileContainer}>
                    <Image
                        source={require('../../Components/Icons/ProfileIcon.png')}
                        style={styles.profileImage}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.greetingText}>Navigate Life</Text>
                        <Text style={styles.appNameText}>Using NaviGo</Text>
                    </View>
                </View>

                {/* Suggestions Section */}
                <Text style={styles.suggestionsText}>Services</Text>
                <View style={styles.suggestionsContainer}>
                    <TouchableOpacity style={styles.suggestionItem} onPress={onBusPress}>
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

            </ScrollView>

            {/* Bottom Navigation Bar */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Home')}>
                    <Image
                        source={require('../../Components/Icons/HomeIcon.png')}
                        style={[styles.navIcon1, activeTab === 'Home' && { tintColor: '#000' }]}
                    />
                    <Text style={[styles.navText, activeTab === 'Home' && styles.navTextActive]}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Services')}>
                    <Image
                        source={require('../../Components/Icons/ServicesIcon.png')}
                        style={[styles.navIcon1, activeTab === 'Services' && { tintColor: '#000' }]}
                    />
                    <Text style={[styles.navText, activeTab === 'Services' && styles.navTextActive]}>Services</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Saved')}>
                    <Image
                        source={require('../../Components/Icons/SavedIcon.png')}
                        style={[styles.navIcon2, activeTab === 'Saved' && { tintColor: '#000' }]}
                    />
                    <Text style={[styles.navText, activeTab === 'Saved' && styles.navTextActive]}>Saved</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('Profile')}>
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
        backgroundColor: '#f5f5f5', // White background color
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    profileContainer: {
        flexDirection: 'column', // Changed to 'column' to stack items vertically
        alignItems: 'flex-start', // Aligns children to the left
        marginBottom: 30,
    },
    profileImage: {
        width: 36,
        height: 40,
        marginBottom: 30, // Adds space between the image and the text
    },
    textContainer: {
        alignItems: 'flex-start', // Aligns the text lines themselves
    },
    greetingText: {
        color: '#555',
        fontSize: 20,
    },
    appNameText: {
        color: '#000',
        fontSize: 40,
        fontWeight: 'bold',
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
        alignItems: 'center',
        paddingVertical: 15,
        width: '30%',
    },
    BusIcon: {
        width: 80,
        height: 53,
        marginBottom: 20,
        marginTop: 10,
    },
    TrainIcon: {
        width: 114,
        height: 76,
        marginBottom: 10,
    },
    MetroIcon: {
        width: 114,
        height: 76,
        marginBottom: 10,
    },
    suggestionText: {
        color: '#000',
        fontSize: 14,
    },
    exploreContainer: {
        backgroundColor: '#2b2b2e',
        borderRadius: 20,
        height: 160,
        padding: 30,
        marginBottom: 20,
    },
    exploreTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    bottomNav: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    navItem: {
        alignItems: 'center',
        marginTop: 10
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