import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, Modal, Button, Image, TouchableOpacity, StyleSheet, Dimensions, Animated } from 'react-native';
import GDPRModal from './GDPRModal';
import styles from '../../../assets/css/styles';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const [contentIndex, setContentIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAgree = () => {
    setModalVisible(false);
    navigation.navigate('Landing');
  };

  const handleClose = () => {
    setModalVisible(false);
  };


  const scrollRef = useRef(null);

  const contents = [
    {
      title: 'Simply Profitable',
      text: "Simplicity breeds profitability",
      imageUrl: require('../../../assets/background1.jpg'),
    },
    {
      title: 'Winning Together',
      text: "Strength in unity, grounded in ethics",
      imageUrl: require('../../../assets/background2.jpg'),
    },
    {
      title: 'La Riba',
      text: "Interest-free, faith-driven prosperity",
      imageUrl: require('../../../assets/background4.jpg'),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex(prevIndex => (prevIndex + 1) % contents.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ x: width * contentIndex, animated: true });
    }
  }, [contentIndex]);
  
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={require('../../../assets/etos-new-logo-bg.png')} style={styles.logo} />
        <Text style={styles.welcomeText}>Welcome to ETOS</Text>
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView style={{ flex: 1 }}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={scrollRef}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: new Animated.Value(0) } } }], { useNativeDriver: false })}
          scrollEventThrottle={16}
        >
          {contents.map((content, index) => (
            <Slider key={index} text={content.text} title={content.title} imageUrl={content.imageUrl} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.indicatorContainer}>
        {contents.map((_, index) => {
          const width = contentIndex === index ? 16 : 8;
          return <View key={index} style={[styles.indicator, { width }]} />;
        })}
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.primaryButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      <GDPRModal visible={modalVisible} onClose={handleClose} onAgree={handleAgree} />

    </View>
  );
};

const Slider = ({ title, text, imageUrl }) => {
  return (
    <View style={styles.sliderContainer}>
      <Image source={imageUrl} style={styles.sliderImage} />
      <View style={styles.overlay}>
        <View style={styles.quotationContainer}>
          <Text style={styles.quotationTitle}>{title}</Text>
          <Text style={styles.quotationText}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
