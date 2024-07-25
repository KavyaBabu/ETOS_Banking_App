import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ImageBackground, Animated, Easing } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from '../../../assets/css/styles';

const LandingPage = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [userType, setUserType] = useState('');
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.elastic(1.5),
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.ease,
        }),
      ]),
    ).start();
  }, [scaleAnim]);

  const handleBuyShares = () => {
    setModalVisible(true);
    setUserType('Investor');
  };

  const handleAccount = () => {
    setModalVisible(true);
    setUserType('Customer');
  };

  const handleOptionSelect = (option) => {
    setModalVisible(false);
    if (option === 'existing') {
      navigation.navigate('Login', { userType });
    } else if (option === 'new') {
      navigation.navigate('Signup', { userType });
    }
  };

  return (
    <ImageBackground source={require('../../../assets/landing-page-bg.jpg')} style={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Animated.Text style={[styles.title, {color: '#fff', fontSize: 30},{ transform: [{ scale: scaleAnim }] }]}>
            Let's Grow your Money
          </Animated.Text>
        </View>
        <View style={styles.content}>
          <TouchableOpacity style={styles.primaryButton} onPress={handleBuyShares} activeOpacity={0.7} >
            <Icon name="line-chart" type="font-awesome" color="#FFFFFF" size={24} />
            <Text style={styles.buttonText}>Buy Shares</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} onPress={handleAccount} activeOpacity={0.7} >
            <Icon name="user-plus" type="font-awesome" color="#FFFFFF" size={24} />
            <Text style={styles.buttonText}>Open Account</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
  transparent={true}
  animationType="slide"
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setModalVisible(false)}
      >
        <Icon name="times" type="font-awesome" color="#333" size={20} />
      </TouchableOpacity>
      <Text style={styles.modalTitle}>Welcome, {userType}!</Text>
      <Text style={styles.modalDescription}>
        You have options to proceed below. Let's get started!
      </Text>
      <View style={styles.optionContainer}>
        <Icon name="user" type="font-awesome" color="#007BFF" size={40} />
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => handleOptionSelect('existing')}
        >
          <Text style={styles.buttonText}>Existing {userType}</Text>
        </TouchableOpacity>
        <Text style={styles.optionDescription}>
          Log in if you already have an account with us.
        </Text>
      </View>
      <View style={styles.optionContainer}>
        <Icon name="user-plus" type="font-awesome" color="#ea4c89" size={40} />
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => handleOptionSelect('new')}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        <Text style={styles.optionDescription}>
          Sign up to create a new account and join our bank.
        </Text>
      </View>
    </View>
  </View>
</Modal>


    </ImageBackground>
  );
};

export default LandingPage;
