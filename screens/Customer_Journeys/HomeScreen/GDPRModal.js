import React, { useState, useEffect } from 'react';
import { View, Text, Button, Modal, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';
import { Icon } from 'react-native-elements';
import styles from '../../../assets/css/styles';

const GDPRModal = ({ visible, onClose, onAgree }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);

  const handleScroll = ({ nativeEvent }) => {
    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
    const isAtBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
    setIsScrolledToEnd(isAtBottom);
  };

  useEffect(() => {
    if (!visible) {
      setIsChecked(false);
      setIsScrolledToEnd(false);
    }
  }, [visible]);

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.gdprContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.title}>GDPR Principles</Text>
            <TouchableOpacity onPress={onClose}>
              <Icon name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.gdprScrollView} onScroll={handleScroll} scrollEventThrottle={16}>
               <Text style={styles.paragraph}>
                In the context of mobile internet banking, ensuring the privacy and protection of personal data is paramount. The General Data Protection Regulation (GDPR) sets out key principles that guide how banks should process and manage customers' personal data through their mobile banking applications.
               </Text>
              <Text style={styles.heading}>1. Lawfulness, Fairness, and Transparency:</Text>
              <Text style={styles.paragraph}>
                Personal data must be processed lawfully, fairly, and in a transparent manner. Mobile banking apps must clearly inform users about how their personal data will be used. This includes providing clear privacy notices and obtaining explicit consent for data processing activities where required.
              </Text>

              <Text style={styles.heading}>2. Purpose Limitation:</Text>
              <Text style={styles.paragraph}>
                Personal data should be collected for specified, explicit, and legitimate purposes. In mobile banking, data collected for account management, transaction processing, and fraud detection should not be used for unrelated purposes without further consent from the user.
              </Text>

              <Text style={styles.heading}>3. Data Minimization:</Text>
              <Text style={styles.paragraph}>
                Only the minimum necessary personal data should be collected and processed. For mobile banking apps, this means collecting only the data required to perform banking transactions and provide essential services.
              </Text>

              <Text style={styles.heading}>4. Accuracy:</Text>
              <Text style={styles.paragraph}>
                Personal data must be accurate and kept up to date. Mobile banking apps should provide users with easy ways to update their personal information to ensure the accuracy of data used for transactions and communications.
              </Text>

              <Text style={styles.heading}>5. Storage Limitation:</Text>
              <Text style={styles.paragraph}>
                Personal data should not be kept for longer than necessary. Mobile banking apps must implement data retention policies that ensure personal data is deleted or anonymized when it is no longer needed for the purposes for which it was collected.
              </Text>

              <Text style={styles.heading}>6. Integrity and Confidentiality:</Text>
              <Text style={styles.paragraph}>
                Personal data must be processed in a manner that ensures its security, including protection against unauthorized or unlawful processing and against accidental loss, destruction, or damage. Mobile banking apps must implement robust security measures such as encryption, secure login methods, and regular security updates.
              </Text>

              <Text style={styles.heading}>7. Accountability:</Text>
              <Text style={styles.paragraph}>
                Banks must be able to demonstrate compliance with GDPR principles. This involves maintaining records of data processing activities, conducting regular audits, and ensuring that staff are trained on data protection responsibilities.
              </Text>
          </ScrollView>
          <View style={styles.footer}>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isChecked}
                onValueChange={setIsChecked}
                disabled={!isScrolledToEnd}
                color= {isChecked? '#1e90ff' : '#d3d3d3'}
              />
              <Text style={styles.checkboxLabel}>I agree to the terms and conditions</Text>
            </View>
            <View style={styles.proceedContainer}>
                <Button
                  title="Proceed"
                  onPress={onAgree}
                  disabled={!isChecked}
                />
            </View>          
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GDPRModal;
