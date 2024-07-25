import { Platform, PermissionsAndroid } from "react-native";

const requestReadPhoneStatePermission = async () => {
  if (Platform.OS === 'android' && Platform.Version >= 23) {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
        {
          title: 'Permission to access phone state',
          message: 'We need your permission to read phone state to fetch SIM data',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can read the phone state');
      } else {
        console.log('Read phone state permission denied');
      }
      return granted;
    } catch (err) {
      console.warn(err);
      return false;
    }
  } else {
    return true;
  }
};

export default requestReadPhoneStatePermission;
