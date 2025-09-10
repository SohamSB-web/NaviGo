import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient
import LoginBar from './LoginBar';

const Login = ({ onLogin }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Components/Icons/Loginbg.png')}
        style={styles.backgroundImage}
      >
        {/* Overlay for fading effect */}
        <LinearGradient
          colors={['transparent', 'rgba(28, 28, 30, 0.4)', 'rgba(28, 28, 30, 1)']} // Transparent to your background color
          locations={[0, 0.4, 1.0]} // Adjust these values to control the fade start/end points
          style={styles.gradientOverlay}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />

        <Text style={styles.headerText}>User login</Text>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>
            Go ahead and setup your account
          </Text>
          <Text style={styles.subtitleText}>
            sign in-up to enjoy the best travel experience
          </Text>
        </View>
      </ImageBackground>
      <LoginBar onLogin={onLogin} style={styles.Wrapper} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(28, 28, 30, 1)',
    justifyContent: 'flex-end',
    paddingBottom: 30
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
  },
  gradientOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%', // Cover the entire image
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    top: '52%',
    fontWeight : '900',
    marginLeft:10, 
    marginTop: 50,
    zIndex: 1, // Ensure text is above the gradient
  },
  textContainer: {
    position: 'absolute',
    marginLeft:10,
    top: '85%', // Adjust this value to position the text vertically
    left: 20,
    right: 20,
    zIndex: 1, // Ensure text is above the gradient
  },
  titleText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitleText: {
    color: '#fff',
    fontSize: 16,
  },
  Wrapper: {
    
  }
});