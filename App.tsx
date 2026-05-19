import 'react-native-gesture-handler';

import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import AppNavigator from './src/navigation/AppNavigator';

import {
  requestNotificationPermissions,
} from './src/services/notifications';

export default function App() {

  useEffect(() => {

    async function initNotifications() {

      await requestNotificationPermissions();

    }

    initNotifications();

  }, []);

  return (
    <NavigationContainer>

      <StatusBar style="light" />

      <AppNavigator />

    </NavigationContainer>
  );
}