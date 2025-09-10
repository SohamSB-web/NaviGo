import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

const LoginBar = ({ onLogin }) => {
    const [activeTab, setActiveTab] = useState('driver');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginPress = () => {
        if (activeTab === 'user' && id === 'demo' && password === '12345') {
            onLogin();
        } else {
            alert('Invalid credentials or not a user.');
        }
    };

    return (
        <SafeAreaView style={[styles.container]}>
            <View style={styles.topBar}></View>
            <View style={styles.contentContainer}>
                {/* Driver/User Toggle Switch */}
                <View style={styles.toggleContainer}>
                    <TouchableOpacity
                        style={[
                            styles.toggleButton,
                            activeTab === 'driver' && styles.toggleButtonActive,
                        ]}
                        onPress={() => setActiveTab('driver')}
                    >
                        <Text style={[styles.toggleText, activeTab === 'driver' && styles.toggleTextActive]}>Driver</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.toggleButton,
                            activeTab === 'user' && styles.toggleButtonActive,
                        ]}
                        onPress={() => setActiveTab('user')}
                    >
                        <Text style={[styles.toggleText, activeTab === 'user' && styles.toggleTextActive]}>User</Text>
                    </TouchableOpacity>
                </View>

                {/* Input Fields */}
                <TextInput
                    style={styles.input}
                    placeholder={`Enter your ${activeTab === 'driver' ? 'ID' : 'Username'}`}
                    placeholderTextColor="#aaaaaa"
                    value={id}
                    onChangeText={setId}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            {/* Login Button with Gradient */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
                <LinearGradient
                    colors={['#111315', '#737373']}
                    style={styles.gradient}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                >
                    <Text style={styles.loginButtonText}>Login</Text>
                </LinearGradient>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default LoginBar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        height: 470,
        borderRadius: 40,
        width: 370,
        alignSelf: 'center',
        padding: 20,
        justifyContent: 'space-between',
    },
    topBar: {
        width: 50,
        height: 5,
        backgroundColor: '#ccc',
        borderRadius: 2.5,
        alignSelf: 'center'
        
    },
    contentContainer: {
        alignItems: 'center',
        width: '100%',
        paddingBottom: 100,
    },
    toggleContainer: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        height: 50,
        padding: 5,
        marginBottom: 30,
        width: 330,
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    input: {
        height: 50,
        width: '100%',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 15,
        color: '#000',
    },
    loginButton: {
        borderRadius: 25,
        width: '80%',
        overflow: 'hidden',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    gradient: {
        paddingVertical: 15,
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});