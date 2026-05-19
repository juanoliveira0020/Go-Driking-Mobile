import { create } from 'zustand';

interface HydrationState {
  goal: number;
  consumed: number;

  notificationsEnabled: boolean;

  notificationHour: number;

  notificationMinute: number;

  addWater: (amount: number) => void;

  setGoal: (value: number) => void;

  toggleNotifications: () => void;

  setNotificationTime: (
    hour: number,
    minute: number
  ) => void;
}

export const useHydrationStore =
  create<HydrationState>((set) => ({
    goal: 2000,

    consumed: 0,

    notificationsEnabled: true,

    notificationHour: 9,

    notificationMinute: 0,

    addWater: (amount) =>
      set((state) => ({
        consumed: state.consumed + amount,
      })),

    setGoal: (value) =>
      set({
        goal: value,
      }),

    toggleNotifications: () =>
      set((state) => ({
        notificationsEnabled:
          !state.notificationsEnabled,
      })),

    setNotificationTime: (hour, minute) =>
      set({
        notificationHour: hour,
        notificationMinute: minute,
      }),
  }));