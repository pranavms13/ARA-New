import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// import AppLoading from 'expo-app-loading';
// import { useFonts } from 'expo-font';
import { IconHome, IconActivity, IconApprovals, IconSettings } from './assets/icons';

import Home from './screens/home'
import ActivityScreen from './screens/activity'
import ApprovalsScreen from './screens/approvals'
import SettingsScreen from './screens/settings'

import SplashScreen from './screens/splashscreen'

import Storage from './assets/helpers/storage';

const Tab = createBottomTabNavigator();
const storager = new Storage();

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   'Ubuntu-Regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
  //   'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
  //   'Ubuntu-Medium': require('./assets/fonts/Ubuntu-Medium.ttf'),
  // });
  let [loggedin, setLoggedin] = React.useState(false);
  // let [tabvisible, setTabvisible] = React.useState(true);

  useEffect(() => {
    storager.getItem('ARA:loggedin').then(value => {
      setLoggedin(value === "true"? true : false);
    });
  }, []);

  const loginsetter = (v) => {
    setLoggedin(v);
    storager.setItem('ARA:loggedin', v === true ? "true" : "false");
    if(!v) storager.removeItem('ARA:ekycdata');
  }

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {
  if (!loggedin) {
    return (
      <SplashScreen setLoggedin={loginsetter} />
    );
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#073042', tabBarInactiveTintColor: "#BBBBBB", tabBarStyle: { height: 65, paddingBottom: 8 }, tabBarLabelStyle: { fontFamily: 'Ubuntu-Bold', fontSize: 13 }
          }}
          initialRouteName="Home"
        >
          <Tab.Screen
            name="Home"
            component={Home}
            // initialParams={{ setTabvisible: setTabvisible }}
            options={{
              tabBarIcon: ({ color, size }) => {
                return (<IconHome color={color} />)
              }
            }}
          />
          <Tab.Screen
            name="Activity"
            component={ActivityScreen}
            options={{
              tabBarIcon: ({ color, size }) => {
                return (<IconActivity color={color} />)
              }
            }}
          />
          <Tab.Screen
            name="Approvals"
            component={ApprovalsScreen}
            options={{
              tabBarIcon: ({ color, size }) => {
                return (<IconApprovals color={color} />)
              }
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            initialParams={{ setLoggedin: loginsetter }}
            options={{
              tabBarIcon: ({ color, size }) => {
                return (<IconSettings color={color} />)
              }
            }}
          />
        </Tab.Navigator>
        <StatusBar backgroundColor='#37C584' barStyle='light-content'/>
      </NavigationContainer>
    );
  }
  // }
}