import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from '../../../assets/css/styles';
import Swiper from 'react-native-swiper';
import { startSDK } from './utils';

const Dashboard = ({ route, navigation }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    navigation.navigate("Home");
  };

  const handleProfileMenu = () => {
    setShowMenu(!showMenu);
  };
  const { payload } = route.params

  const { title, name, usertype } = payload

  const activeSteps = [1];

  const benefits = [
    {
      title: 'Convenient Transactions',
      description: 'Easily manage your finances anytime, anywhere with our convenient mobile banking app.',
      icon: require('../../../assets/transaction.png'), // replace with your icon path
    },
    {
      title: 'Enhanced Security',
      description: 'Your security is our priority. Enjoy peace of mind with our top-notch security features.',
      icon: require('../../../assets/security.png'),
    },
    {
      title: 'Instant Notifications',
      description: 'Stay updated with instant notifications for all your transactions and account activities.',
      icon: require('../../../assets/notification.png'),
    },
  ];

  const renderSlide = (item, index) => (
    <View style={[styles.slide, styles.slideBackground]} key={index}>
      <Image source={item.icon} style={styles.icon} />
      <Text style={styles.title}>{item.title}</Text>
      {/* <Text style={styles.description}>{item.description}</Text> */}
    </View>
  );

  return (
    <View style={styles.dashboardContainer}>
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Welcome, {title} {name}!</Text>
        <View style={styles.bannerIcons}>
          <TouchableOpacity style={styles.iconContainer}>
            <AntDesign name="bells" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer} onPress={handleProfileMenu}>
            <AntDesign name="user" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      {showMenu && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <AntDesign name="setting" size={20} style={styles.menuIcon} />
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <AntDesign name="profile" size={20} style={styles.menuIcon} />
            <Text style={styles.menuText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <AntDesign name="logout" size={20} style={styles.menuIcon} />
            <Text style={styles.menuText}>Log Off</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.swiperContainer}>
        <Swiper
          style={styles.wrapper}
          showsButtons={true}
          loop={true}
          autoplay={true}
          autoplayTimeout={5}
        >
          {benefits.map((item, index) => renderSlide(item, index))}
        </Swiper>
      </View>
      <ScrollView contentContainerStyle={styles.stepsContainer}>
        {usertype === 'Customer' ? (
          <>
            <Step number={1} title="Verify Identity" description="Upload documents like passport, BRP, driving license" isActive={activeSteps.includes(1)} />
            <Step number={2} title="Easy Login Setup" description="Add facial recognition, face ID, fingerprints biometrics" isActive={activeSteps.includes(2)} />
            <Step number={3} title="Financial Profile Setup" description="Provide Details of Your Employment, Salary, and Occupation" isActive={activeSteps.includes(3)} />
            <Step number={4} title="Account's Mission" description="Review and Define the Purpose of Your Account and Its Intended Use" isActive={activeSteps.includes(4)} />
            <Step number={5} title="Select Account Type & Plan" description="Browse Available Cards and Plans, Choose the Best Fit for You, and Complete Account Creation" isActive={activeSteps.includes(5)} />
          </>
        ) : (
          <>
            <Step number={1} title="Verify Identity" description="Upload documents like passport, BRP, driving license" isActive={activeSteps.includes(1)} />
            <Step number={2} title="Buy/Purchase Share" description="View benefits and returns, then proceed with the purchase" isActive={activeSteps.includes(2)} />
            <Step number={3} title="Manage/Sell Shares" description="Monitor prices, process payments, download confirmations, and issue certificates" isActive={activeSteps.includes(3)} />
            <Step number={4} title="Account Opening" description="Initiate setup and provide necessary information to open an account" isActive={activeSteps.includes(4)} />
            <Step number={5} title="Select Account Type & Plan" description="Browse Available Cards and Plans, Choose the Best Fit for You, and Complete Account Creation" isActive={activeSteps.includes(5)} />
          </>
        )}
      </ScrollView>
      <View style={styles.footer}>
        <FooterIcon icon="appstore-o" text="Accounts" />
        <FooterIcon icon="solution1" text="Plans" />
        <FooterIcon icon="customerservice" text="Support" />
        <FooterIcon icon="gift" text="Benefits" />
      </View>
    </View>
  );
};

const Step = ({ number, title, description, isActive }) => {
  const [expanded, setExpanded] = useState(false);

  const handleStepPress = () => {
    setExpanded(!expanded); 
  };

  const handleStart = () => {
    if (number === 1) {
      startSDK();
    }
  }

  return (
    <TouchableOpacity
      style={[styles.step, isActive ? styles.activeStep : styles.inactiveStep]}
      onPress={handleStepPress}>
      <View style={[styles.stepContent, { backgroundColor: '#fff' }]}>
        <View style={styles.stepHeader}>
          <Text style={styles.stepTitle}>{title}</Text>
          <AntDesign name={expanded ? 'up' : 'down'} size={24} color="#000" />
        </View>
        {expanded && (
          <>
            <Text style={styles.stepDescription}>{description}</Text>
            <TouchableOpacity style={styles.startButton} onPress={handleStart}>
              <Text style={styles.startButtonText}>Start</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      <View style={styles.stepDivider}></View>
    </TouchableOpacity>
  );
};

const FooterIcon = ({ icon, text }) => {
  return (
    <TouchableOpacity style={styles.footerIconContainer}>
      <AntDesign name={icon} size={24} color="#1e90ff" />
      <Text style={styles.footerIconText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Dashboard;
