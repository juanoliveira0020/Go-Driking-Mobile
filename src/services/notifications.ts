import * as Notifications from 'expo-notifications';

// Configuração das notificações
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,

    // obrigatório SDK 54+
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

// Solicita permissão
export async function requestNotificationPermissions(): Promise<boolean> {

  const { status } =
    await Notifications.requestPermissionsAsync();

  return status === 'granted';
}

// Agenda notificação diária
export async function scheduleHydrationNotification(
  hour: number,
  minute: number
): Promise<void> {

  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Go Driking',
      body: 'Hora de beber água.',
      sound: true,
    },

    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour,
      minute,
    },
  });
}

// Cancela todas notificações
export async function cancelAllNotifications(): Promise<void> {

  await Notifications.cancelAllScheduledNotificationsAsync();

}