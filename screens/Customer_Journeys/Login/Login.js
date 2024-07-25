import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import * as LocalAuthentication from 'expo-local-authentication';
import styles from '../../../assets/css/styles';

function Login({ route, navigation }) {
  const userType = route.params?.userType || '';
  const [selectedLoginMethod, setSelectedLoginMethod] = useState('fingerprint');
  const [passcode, setPasscode] = useState(['', '', '', '']);
  const passcodeRefs = useRef([]);

  const handleLoginMethodChange = (method) => {
    setSelectedLoginMethod(method);
  };

  const handlePasscodeChange = (value, index) => {
    const newPasscode = [...passcode];
    newPasscode[index] = value;
    setPasscode(newPasscode);

    if (value && index < passcodeRefs.current.length - 1) {
      passcodeRefs.current[index + 1].focus();
    }
    if (newPasscode.join('').length === 4) {
      navigation.navigate('Dashboard');
    }
  };
   const handleFingerprintAuth = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate with your fingerprint',
      });

      if (result.success) {
        console.log('Authentication successful');
        navigation.navigate('Dashboard');
      } else {
        console.log('Authentication failed');
      }
    } catch (error) {
      console.error('Error authenticating:', error);
    }
  };
  const renderLoginMethod = () => {
    switch (selectedLoginMethod) {
      case 'fingerprint':
        return (
          <TouchableOpacity style={styles.primaryButton} onPress={handleFingerprintAuth}>
            <View style={styles.fingerprintContainer}>
              <Icon name="fingerprint" size={32} color="#fff" />
              <Text style={styles.buttonText}> Log in with Fingerprint</Text>
            </View>            
          </TouchableOpacity>
        );
      case 'passcode':
        return (
          <View style={styles.passcodeContainer}>
            {Array(4).fill().map((_, i) => (
              <TextInput
                key={i}
                style={styles.passcodeInput}
                keyboardType="numeric"
                maxLength={1}
                value={passcode[i]}
                onChangeText={(value) => handlePasscodeChange(value, i)}
                ref={(ref) => passcodeRefs.current[i] = ref}
                secureTextEntry={true}
              />
            ))}
          </View>
        );
      case 'password':
      default:
        return (
          <>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.loginInput}
                placeholder="Password"
                secureTextEntry={true}
              />
            </View>
          </>
        );
    }
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.loginPanel}>
        <Image style={styles.userImage} source={require('../../../assets/default-avatar.jpg')} />
        <Text style={styles.title}>Welcome, Kavya Babu!</Text>

        <View style={styles.loginMethodContainer}>
          <TouchableOpacity
            style={[styles.methodButton, selectedLoginMethod === 'fingerprint' && styles.selectedMethod]}
            onPress={() => handleLoginMethodChange('fingerprint')}
          >
            <Icon name="fingerprint" size={24} color="#007BFF" />
            <Text style={styles.methodButtonText}>Fingerprint</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.methodButton, selectedLoginMethod === 'passcode' && styles.selectedMethod]}
            onPress={() => handleLoginMethodChange('passcode')}
          >
            <Icon name="key" type="font-awesome" size={24} color="#007BFF" />
            <Text style={styles.methodButtonText}>4-digit PIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.methodButton, selectedLoginMethod === 'password' && styles.selectedMethod]}
            onPress={() => handleLoginMethodChange('password')}
          >
            <Icon name="lock" size={24} color="#007BFF" />
            <Text style={styles.methodButtonText}>Password</Text>
          </TouchableOpacity>
        </View>

        {renderLoginMethod()}

        {selectedLoginMethod === 'password' && (
          <View style={styles.textContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={[styles.text, styles.loginLink]}>Signup</Text>
            </TouchableOpacity>
            <Text style={styles.text}> | </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={[styles.text, styles.loginLink]}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        )}
        {selectedLoginMethod === 'password' && (
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        )}
        <View style={styles.divider}></View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Not Kavya Babu? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={[styles.text, styles.signupText]}>Log in as another user</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footerLinks}>
        <TouchableOpacity onPress={() => navigation.navigate("#")}>
          <Icon name="comments" type="font-awesome" size={36} color="#007BFF" />
          <Text style={styles.footerLinkText}>Chat Banking</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("#")}>
          <Icon name="shield" type="font-awesome" size={36} color="#007BFF" />
          <Text style={styles.footerLinkText}>Secure Banking</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("#")}>
          <Icon name="lock" type="font-awesome" size={36} color="#007BFF" />
          <Text style={styles.footerLinkText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

export default Login;
