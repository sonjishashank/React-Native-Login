import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import { Feather } from '@expo/vector-icons'; // Import Feather icon from expo/vector-icons

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true); // State to track password visibility
  const navigation = useNavigation(); // Initialize navigation hook

  const handleLogin = () => {
    // Basic authentication logic
    if ((username === 'Kenneth' && password === 'fuckoff') || (username === 'Shashi' && password === '')) {
      // If credentials are correct, navigate to NextPage
      navigation.navigate('NextPage');
    } else {
      // If credentials are incorrect, show error message
      Alert.alert('Login Failed', 'Invalid username or password.');
    }
  };

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword); // Toggle password visibility
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={hidePassword} // Use secureTextEntry based on hidePassword state
        />
        <Feather 
          name={hidePassword ? 'eye' : 'eye-off'} // Toggle eye icon based on hidePassword state
          size={24} 
          color="black" 
          onPress={togglePasswordVisibility} // Toggle password visibility onPress
        />
      </View>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%', // Set width to match the username input field
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
