import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const GetStarted = ({ onGetStarted }) => {
    return (
        <ImageBackground
            source={require('../../Components/Icons/BG.png')}
            style={styles.background}
        >
            <LinearGradient
                colors={['rgba(0, 0, 0, 0.56)', 'rgba(0, 0, 0, 0.93)']}
                style={styles.gradientOverlay}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
            >
                <View style={styles.topContainer}>
                    <Image source={require('../../Components/Icons/Logo.png')} style={styles.logo} />
                </View>

                <View style={styles.textAndButtonContainer}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.titleText}>Commute Smarter.{"\n"}Travel Easier.</Text>
                        <Text style={styles.subtitleText}>
                            Track public transport in real-time, get live {"\n"}
                            arrival times, so you can travel with {"\n"}
                            confidence and ease.
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.getStartedButton} onPress={onGetStarted}>
                        <LinearGradient
                            colors={['#111315', '#737373']}
                            style={styles.buttonGradient}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.buttonText}>Get Started</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </ImageBackground>
    );
};

export default GetStarted;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    gradientOverlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'space-between',
        paddingVertical: 50,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
        
    },
    logo: {
        width: 65,
        height: 65,
    },
    textAndButtonContainer: {
        justifyContent: 'flex-end',
    },
    contentContainer: {
        paddingHorizontal: 30,
        marginBottom: 50,
    },
    titleText: {
        color: '#fff',
        fontSize: 32,
        fontWeight: '900',
        marginBottom: 10,
    },
    subtitleText: {
        color: '#fff',
        marginTop: 10,
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'left',
    },
    getStartedButton: {
        borderRadius: 30,
        overflow: 'hidden',
        width: '80%',
        alignSelf: 'center',
    },
    buttonGradient: {
        paddingVertical: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});