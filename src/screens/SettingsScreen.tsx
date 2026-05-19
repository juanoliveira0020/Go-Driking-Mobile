import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Platform,
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import {
  scheduleHydrationNotification,
  cancelAllNotifications,
} from '../services/notifications';

import { COLORS } from '../theme/colors';

import { useHydrationStore } from '../store/hydrationStore';

export default function SettingsScreen() {

  const {
    notificationsEnabled,
    toggleNotifications,
    notificationHour,
    notificationMinute,
    setNotificationTime,
  } = useHydrationStore();

  const [showPicker, setShowPicker] = useState(false);

  const currentDate = new Date();

  currentDate.setHours(notificationHour);

  currentDate.setMinutes(notificationMinute);

  async function handleToggle() {

    toggleNotifications();

    if (notificationsEnabled) {
      await cancelAllNotifications();
    } else {
      await scheduleHydrationNotification(
        notificationHour,
        notificationMinute
      );
    }
  }

  async function handleDateChange(
    event: any,
    selectedDate?: Date
  ) {

    setShowPicker(false);

    if (!selectedDate) return;

    const hour = selectedDate.getHours();

    const minute = selectedDate.getMinutes();

    setNotificationTime(hour, minute);

    await cancelAllNotifications();

    if (!notificationsEnabled) return;

    await scheduleHydrationNotification(
      hour,
      minute
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Configurações
      </Text>

      <View style={styles.card}>

        <View style={styles.row}>
          <Text style={styles.label}>
            Notificações
          </Text>

          <Switch
            value={notificationsEnabled}
            onValueChange={handleToggle}
          />
        </View>

        <TouchableOpacity
          style={styles.timeButton}
          onPress={() => setShowPicker(true)}
        >
          <Text style={styles.timeText}>
            Horário do lembrete
          </Text>

          <Text style={styles.timeValue}>
            {String(notificationHour).padStart(2, '0')}
            :
            {String(notificationMinute).padStart(2, '0')}
          </Text>
        </TouchableOpacity>

      </View>

      {showPicker && (
        <DateTimePicker
          value={currentDate}
          mode="time"
          display={
            Platform.OS === 'ios'
              ? 'spinner'
              : 'default'
          }
          onChange={handleDateChange}
        />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 24,
    justifyContent: 'center',
  },

  title: {
    color: COLORS.text,
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 30,
  },

  card: {
    backgroundColor: COLORS.card,
    borderRadius: 24,
    padding: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  label: {
    color: COLORS.text,
    fontSize: 18,
  },

  timeButton: {
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: '#2D1B45',
    paddingTop: 20,
  },

  timeText: {
    color: COLORS.muted,
    marginBottom: 8,
  },

  timeValue: {
    color: COLORS.primary,
    fontSize: 32,
    fontWeight: '700',
  },
});