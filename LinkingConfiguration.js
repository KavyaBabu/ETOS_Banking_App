import * as Linking from 'expo-linking';

const linking = {
  prefixes: ['myapp://'],
  config: {
    screens: {
      Signup: {
        path: 'signup',
        parse: {
          activationKey: ({ activationKey }) => activationKey,
          step: ({ step }) => Number(step),
        },
      },
    },
  },
};

export default linking;
