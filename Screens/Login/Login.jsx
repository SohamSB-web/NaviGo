import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LoginBar from './LoginBar';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to NaviGo</Text>
      <LoginBar style={styles.barWrapper} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 26,
    alignSelf: 'center',
    marginBottom: 300
  },
  
  barWrapper: {
    marginBottom: 20,
  },
});