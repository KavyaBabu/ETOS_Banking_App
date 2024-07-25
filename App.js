import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Customer_Journeys/HomeScreen/HomeScreen';
import Login from './screens/Customer_Journeys/Login/Login';
import Signup from './screens/Customer_Journeys/SignUp/SignUp';
import Dashboard from './screens/Customer_Journeys/Dashboard/Dashboard';
import LandingPage from './screens/Customer_Journeys/LandingPage/LandingPage';
import linking from './LinkingConfiguration';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
        <Stack.Screen name="Landing" component={LandingPage} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
