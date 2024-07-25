import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
 // styles for home screen
  container: {
    flex: 1,
  },
  topContainer: {
    position: 'absolute',
    top: 30,
    width: '100%',
    alignItems: 'center',
    zIndex: 1,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginTop: 10,
  },
  scrollViewContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    marginBottom: 20,
  },
  sliderContainer: {
    width,
    height: '100%',
    position: 'relative',
  },
  sliderImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  quotationContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  quotationTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center',
  },
  quotationText: {
    fontSize: 18,
    color: '#ffffff',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: '15%',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  indicator: {
    height: 8,
    backgroundColor: '#1e90ff',
    marginHorizontal: 4,
    borderRadius: 4,
  },
  grow: { flexGrow: 1 },
  modalTitle: {
    fontSize: 20,
    fontWeight:'bold',
    marginBottom: 15,
    textAlign: 'center',
  }, 
  modalText: {
    textAlign: 'justify',
  },
  label: {
    margin: 8,
  },
  agreeButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 5,
    backgroundColor: '#66bb6a',
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: '#cccccc',
  },
  agreeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Landing page
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    // width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: '25%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    // color: '#FFFFFF',
  },
  content: {
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    width: '100%'
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'justify'
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify'
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 50,
    backgroundColor: '#007BFF',
    borderRadius: 25,
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 40,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 50,
    backgroundColor: '#ea4c89',
    borderRadius: 25,
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    elevation: 5,
    margin: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 10,
  },
  gdprContainer: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#f6f8fa',
    padding: 20,
    borderRadius: 10,
    // alignItems: 'center',
    position: 'relative', 
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    zIndex: 1
  },
  modalDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  optionContainer: {
    justifyContent:'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    color: '#666',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  gdprScrollView: {
    maxHeight: Dimensions.get('window').height * 0.5,
  },
  contentText: {
    fontSize: 16,
    marginBottom: 20,
  },
  footer: {
    marginTop: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
  proceedContainer: {
    marginTop: 40
  },
  dashboardContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    backgroundColor: '#3498db',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  bannerIcons: {
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor:'#fff',
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    padding: 10,
    color: '#000',
  },
  menu: {
    position:'absolute',
    top: 100,
    right: 30,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    zIndex: 10
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  menuIcon: {
    marginRight: 10,
  },
  menuText: {
    fontSize: 16,
  },
  roundedButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  stepsContainer: {
    paddingTop: 40,
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  step: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  activeStep: {
    backgroundColor: '#3498db',
    opacity: 1
  },
  inactiveStep: {
    backgroundColor: '#f5f5f5',
    opacity: 0.5
  },
  swipeBannerContainer: {
    height: 100,
    marginTop: 30,
    marginBottom: 20,
  },
  swipeBannerItem: {
    width: Dimensions.get('window').width - 40, // Adjust to fit the screen width
    backgroundColor: '#9b59b6',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 20,
  },
  swipeBannerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  step: {
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: 10, // Adjusted margin to include space for divider
  },
  stepContent: {
    padding: 15,
  },
  stepHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  stepDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
  },
  stepDivider: {
    height: 1,
    // backgroundColor: '#ccc',
    marginTop: 5,
  },
  startButton: {
    marginTop: 10,
    backgroundColor: '#1e90ff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerIconContainer: {
    alignItems: 'center',
  },
  footerIconText: {
    marginTop: 5,
    color: '#333',
  },
  swiperContainer: {
    height: 100,
    marginBottom: 0
  },
  wrapper: { },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  slideBackground: {
    backgroundColor: '#fff'
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  // Signup page

  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 20
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    marginBottom: 20,
    color: '#666',
  },
  successMessage: {
    marginBottom: 20,
    fontSize: 16,
    color: '#28a745',
    fontWeight: 'bold',
  },
  verificationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  messageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#f0f8ff',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#f0f8ff',
  },
  iconBt: {
    marginBottom: 10,
  },
  messageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  messageSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 5,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16
  },
  inputFocused: {
    borderColor: '#1e90ff',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  codeInput: {
    flex: 1,
    height: 50,
    margin: 10,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 20,
    backgroundColor: '#fff',
  },
  button: {
    height: 50,
    backgroundColor: '#1e90ff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginLink: {
    color: '#1e90ff',
    fontWeight: 'bold',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerContainer: {
  flex: 1,
  padding: 5,
  marginRight: 10,
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 10,
  height: 40,
  justifyContent:'center'
  },
  pickerInput: {
    height: '100%'    
  },
  picker: {
    flex: 1,
  },
  nameInput: {
    flex: 2
  },
  progressBarContainer: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#1e90ff',
  },
   numberSelectorContainer: {
    marginTop: 20,
  },
  selectorTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  numberItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  numberText: {
    fontSize: 16,
  },
  iconInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    flex: 2,
  },
  inputIcon: {
    marginRight: 10,
  },
  companyRegInput: {
    margin: 0,
    padding: 10, 
  },

  // login page

  loginContainer: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  loginPanel: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: -40,
    marginBottom: 10,
    position: 'absolute'
  },
  loginMethodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  methodButton: {
    alignItems: 'center',
    padding: 10,
    width: '30%',
  },
  methodButtonText: {
    marginTop: 5,
    fontSize: 12,
    color: '#007BFF',
  },
  selectedMethod: {
    borderColor: '#007BFF',
    backgroundColor: '#e7f0ff',
    borderRadius: 10
  },
  passcodeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '80%',
  },
  passcodeInput: {
    width: '20%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
  },
  loginInput: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 5,
    fontSize: 16,
    color: '#333'
  },
  fingerprintButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
  },
  text: {
    fontSize: 16,
  },
  signupText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  }, 
  footerLinkText: {
    textAlign: 'center',
    color: '#007BFF',
    marginTop: 5,
  },
  fingerprintContainer: {
    flexDirection:'row',
    alignItems:'center'
  },
  resendButton: {
    marginTop: 20,
  },
  resendText: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  phoneInputContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
    width: '100%'
  },
  phoneInput: {
    height: 25,
    paddingHorizontal: 10,
  },
});

export default styles;
