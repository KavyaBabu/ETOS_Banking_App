import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Progress from 'react-native-progress';
import Loader from '../../../components/Loader';
import styles from '../../../assets/css/styles';
import { postRequest } from '../../../services/apiServices';
import PhoneInput from 'react-native-phone-number-input';

const SignupComplete = ({ route, navigation }) => {

  const [step, setStep] = useState(1);
  const [title, setTitle] = useState('Mr.'); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [userTypeDetail, setUserTypeDetail] = useState('');
  const [companyRegNumber, setCompanyRegNumber] = useState(''); 
  const userType = route.params?.userType || '';
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const inputRefs = useRef([]);
  
  console.disableYellowBox = true;

  useEffect(() => { 
  const intervalId = setInterval(() => {
    setElapsedTime(prevTime => Math.min(prevTime + 1, 30 * 60));
  }, 1000);

  return () => clearInterval(intervalId);
  }, []);

   const handleNext = () => {
    switch (step) {
      case 1:
        setStep(2);
        break;
      case 2:
        handleEmailVerification();
        break;
      case 3:
        confirmEmailVerification();
        break;
      case 4:
        setStep(5);
        break;
      case 5:
        sendOTP();
        break;
      case 6:
        verifyOTP();
        break;
      case 7:
        setStep(8);
        break;
      case 8:
        updateDetails();
        break;
      default:
        break;
    }
  };

  const handleMobileNumberChange = (number) => {
    if (!number.startsWith('0')) {
      number = '0' + number;
    }
    setMobileNumber(number);
  };

  const handleEmailVerification = () => {
     setLoading(true);
     postRequest('/account_opener/open_account/', {
      name: name,
      title: title,
      email: email,
      type_of_options: "email_validation"
    })
    .then((responseData) => {
      setLoading(false);
      console.log(JSON.stringify(responseData));
      setStep(3);
    })
    .catch((error) => {
      setLoading(false)
      console.error('Error:', error.message);
      Alert.alert('Error', error.message);
    });
  };

  const confirmEmailVerification = () => {
    setLoading(true)
    postRequest('/account_opener/verify_email/', {
      email: email
    })
    .then((responseData) => {
      setLoading(false)
      console.log(JSON.stringify(responseData));
      setIsEmailVerified(true);
      setStep(4);
    })
    .catch((error) => {
      setLoading(false)
      console.error('Error:', error.message);
      Alert.alert('Error', error.message);
    });
  };
  
   const updateDetails = () => {
    setLoading(true)
    const payload = {
      title: title,
      name: name,
      email: email,
      mobile: mobileNumber,
      usertype: userType,
      type_of_options: "account_opening"
    };

    if (userType === 'Investor') {
      payload.investor_type = userTypeDetail;
      payload.company_registration_number = companyRegNumber;
    }
    console.log(payload)
    postRequest('/account_opener/open_account/', payload)
    .then((responseData) => {
      setLoading(false)
      console.log(JSON.stringify(responseData));
      Alert.alert('Success', 'Account successfully created for you');
      navigation.navigate("Dashboard", { payload });
    })
    .catch((error) => {
      setLoading(false)
      console.error('Error:', error.message);
      Alert.alert('Error', error.message);
    });
  };
  const sendOTP = () => {
    setLoading(true)
      postRequest('/account_opener/open_account/',{
      mobile: mobileNumber,
      type_of_options: "mobile_no_validation"
    })
      .then((responseData) => {
        setLoading(false)
        console.log(JSON.stringify(responseData));
        Alert.alert('Success', responseData.message);
        setStep(6);
      })
      .catch((error) => {
        setLoading(false)
        console.error('Error:', error.message);
        Alert.alert('Error', error.message);
      });
  };
  const verifyOTP = () => {
    const code = otp.join('');
    setLoading(true)
    postRequest('/account_opener/open_account/',{
      otp: code,
      mobile: mobileNumber,
      type_of_options: "otp_verified"
    })
      .then((responseData) => {
        setLoading(false)
        if(userType === 'customer'){
        Alert.alert('Success', 'Your account has been successfully created!');
        navigation.navigate("Dashboard", { userType });    
        }
        else{
          Alert.alert('Success', responseData.message);
          setStep(7);
        }
      })
      .catch((error) => {
        setLoading(false)
        console.error('Error:', error.message);
        Alert.alert('Error', error.message);
      });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <View style={styles.inputContainer}>
            <Text style={styles.title}>Let's Get Started!</Text>
            <Text style={styles.subtitle}>Welcome! We're thrilled that you've chosen to join us. How would you like us to address you?</Text>
             <View style={styles.rowContainer}>
              <View style={styles.pickerContainer}>
                <Picker
                style={styles.pickerInput}
                selectedValue={title}
                onValueChange={(itemValue, itemIndex) => setTitle(itemValue)}
                >
                <Picker.Item label="Dr" value="Dr" />
                <Picker.Item label="Mr." value="Mr." />
                <Picker.Item label="Mrs." value="Mrs." />
                <Picker.Item label="Miss" value="Miss" />
                <Picker.Item label="Prof" value="Prof" />                
               </Picker>
              </View>
              <View style={styles.iconInputContainer}>
              <Icon name="user" size={20} color="#666" style={styles.inputIcon} />
              <TextInput
                style={[styles.input, isFocused && styles.inputFocused, styles.nameInput]}
                placeholder="Your Name"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={[styles.loginLink, {marginTop: 20}]}>Already have an account? Log in</Text>
            </TouchableOpacity>
          </View>
        );
      case 2:
        return (
          <View style={styles.inputContainer}>
            <Text style={styles.title}>Hello {title} {name},</Text>
            <Text style={styles.subtitle}>Please enter your email address to verify your account.</Text>
            <View style={styles.iconInputContainer}>
              <Icon name="envelope" size={20} color="#666" style={styles.inputIcon} />
              <TextInput
                style={[styles.input, isFocused && styles.inputFocused]}
                placeholder="Email Address"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </View>
          </View>
        );
      case 3:
        return (
         <View style={styles.inputContainer}>
            <View style={styles.verificationContainer}>
              <Icon name="check-circle" size={50} color="#28a745" />
              <Text style={styles.title}>Email Sent!</Text>
              <Text style={styles.successMessage}>
                A verification link has been sent to {email}. Please check your inbox and click the link to verify your account.
              </Text>
              <View style={styles.progressBarContainer}>
                <Progress.Bar progress={elapsedTime / (30 * 60)} width={null} color="#1e90ff" />
              </View>
              <TouchableOpacity onPress={() => setStep(2)}>
                <Text style={[styles.loginLink, {marginTop: 20}]}>Resend Link</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case 4:
        return (
          <View style={styles.inputContainer}>
            <View style={styles.verificationContainer}>
              <Icon name="envelope" size={50} color="#28a745" />
              <Text style={styles.title}>Congratulations!</Text>
              <Text style={styles.successMessage}>
                {`${title}${name}, your email has been verified successfully.`}
              </Text>
              <Text style={styles.subtitle}>You can now proceed to the next step.</Text>
            </View>
          </View>
        );
      case 5:
        return (
          <View style={styles.inputContainer}>
              <Text style={styles.title}>Verify Mobile Number</Text>
              <Text style={styles.subtitle}>{title} {name}, your email ({email}) has been verified. We just need to verify your mobile number.</Text>
              <PhoneInput
                defaultCode="GB"
                placeholder="Your Mobile Number"
                value={mobileNumber || ''}
                onChangeText={handleMobileNumberChange}
                containerStyle={styles.phoneInputContainer}
                textInputStyle={styles.phoneInput}
                autoFocus
                countryPickerProps={{
                  withAlphaFilter: false,
                  withCallingCode: true,
                  withEmoji: false,
                }}
              />
          </View>
        );
      case 6:
        return (
          <View style={styles.inputContainer}>
            <Text style={styles.title}>Enter OTP</Text>
            <Text style={styles.subtitle}>{title} {name} OTP has been sent to your Mobile. Please enter the 6-digit OTP.</Text>
            <View style={styles.codeContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  style={styles.codeInput}
                  value={digit}
                  onChangeText={(text) => handleOTPChange(text, index)}
                  keyboardType="numeric"
                  maxLength={1}
                />
              ))}
            </View>
            <TouchableOpacity onPress={sendOTP} style={styles.resendButton}>
              <Text style={styles.resendText}>Resend Code</Text>
            </TouchableOpacity>
          </View>
        );
      case 7:
        if (userType === 'Investor') {
          return (
            <View style={styles.inputContainer}>
              <Text style={styles.title}>Your Email and Mobile Number Are Verified!</Text>
              <Text style={styles.subtitle}>Now let's gather some additional information.</Text>
              <Text style={styles.subtitle}>Please select if you are an individual or a company/Ltd.</Text>
              <View style={[styles.pickerContainer, {marginBottom: 20}]}>
                <Picker
                selectedValue={userTypeDetail}
                onValueChange={(itemValue, itemIndex) => setUserTypeDetail(itemValue)}
                style={styles.pickerInput}
                >
                <Picker.Item label="Select..." value="" />
                <Picker.Item label="Individual" value="individual" />
                <Picker.Item label="Company/Ltd" value="company" />
                </Picker>

              </View>
              { userTypeDetail === 'company' && (
              <View style={styles.iconInputContainer}>
              <Icon name="id-card" size={20} color="#666" style={styles.inputIcon} />
                    <TextInput
                      style={[styles.input,styles.companyRegInput]}
                      placeholder="Company Registration Number"
                      value={companyRegNumber}
                      onChangeText={setCompanyRegNumber}
                    />
              </View>
              )}
            </View>
          );
        }
       
        return (
          <View style={styles.messageContainer}>
              <Icon name="check-circle" size={50} color="#28a745" style={styles.icon} />
              <Text style={styles.messageTitle}>One Step Closer!</Text>
              <Text style={styles.messageSubtitle}>
                {title} {name}, your details have been registered with us.
              </Text>
              <Text style={styles.messageSubtitle}>
                You are one step closer to opening your account.
              </Text>
              <Text style={styles.messageSubtitle}>
                Please keep your documents ready to proceed.
              </Text>
              <Text style={styles.messageSubtitle}>
                If you're not ready, you have the option to log in and proceed later.
              </Text>
          </View>
        );
      case 8:
        return (
           <View style={styles.messageContainer}>
              <Icon name="check-circle" size={50} color="#28a745" style={styles.iconBt} />
              <Text style={styles.messageTitle}>One Step Closer!</Text>
              <Text style={styles.messageSubtitle}>
                {title} {name}, your details have been registered with us.
              </Text>
              <Text style={styles.messageSubtitle}>
                You are one step closer to opening your account.
              </Text>
              <Text style={styles.messageSubtitle}>
                Please keep your documents ready to proceed.
              </Text>
              <Text style={styles.messageSubtitle}>
                If you're not ready, you have the option to log in and proceed later.
              </Text>
          </View>
        );
      default:
        return null;
    }
  };

  const handleOTPChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (index < otp.length - 1 && text !== '') {
      inputRefs.current[index + 1].focus();
    }
  };

  const isSignupButtonDisabled = () => {
    switch (step) {
      case 1:
        return name.trim() === '';
      case 2:
        return !validateEmail(email);
      case 3:
        return !validateEmail(email);
      case 4:
        return !isEmailVerified;
      case 5:
        return mobileNumber.length < 10;
      case 6:
        return otp.includes('');
      case 7:
        if (userType === 'Investor') {
        return userTypeDetail === '' || (userTypeDetail === 'company' && companyRegNumber.trim() === '');
        } else {
          return false;
        }
      case 8:
        return false;
      default:
        return true;
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <KeyboardAvoidingView style={[styles.container, {backgroundColor: '#fff'}]} behavior="padding" enabled>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.inputContainer}>
          {renderStep()}
        </View>
        {isLoading && <Loader />}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, isSignupButtonDisabled() && styles.buttonDisabled]}
          onPress={handleNext}
          disabled={isSignupButtonDisabled()}
        >
          <Text style={styles.buttonText}>
          {step === 1 ? 'Start' : step === 2 ? 'Send Activation Link' : step === 3 ? 'Confirm' : step === 4 ? 'Next' : step === 5 ? 'Confirm Mobile Number' : (userType === 'Investor' && step === 7) ? 'Next' : 'Submit'}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
   
export default SignupComplete;
