import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { useHydrationStore } from '../store/hydrationStore';
import { COLORS } from '../theme/colors';
import { phrases } from '../utils/phrases';

export default function HomeScreen() {
  const { consumed, goal, addWater } = useHydrationStore();

  const progress = (consumed / goal) * 100;

  return (
    <LinearGradient
      colors={['#0F0718', '#1B102B']}
      style={styles.container}
    >
      <Text style={styles.title}>Go Driking</Text>

      <AnimatedCircularProgress
        size={220}
        width={18}
        fill={progress}
        tintColor={COLORS.primary}
        backgroundColor="#2A1B45"
      >
        {() => (
          <View>
            <Text style={styles.value}>{consumed} ml</Text>
            <Text style={styles.goal}>Meta {goal} ml</Text>
          </View>
        )}
      </AnimatedCircularProgress>

      <TouchableOpacity
        style={styles.button}
        onPress={() => addWater(250)}
      >
        <Text style={styles.buttonText}>Adicionar 250 ml</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          {phrases[Math.floor(Math.random() * phrases.length)]}
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
  title: {
    color: COLORS.text,
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 40
  },
  value: {
    color: COLORS.text,
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center'
  },
  goal: {
    color: COLORS.muted,
    textAlign: 'center',
    marginTop: 8
  },
  button: {
    marginTop: 40,
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 18
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600'
  },
  card: {
    marginTop: 32,
    backgroundColor: COLORS.card,
    width: '100%',
    padding: 20,
    borderRadius: 20
  },
  cardText: {
    color: COLORS.text,
    textAlign: 'center',
    lineHeight: 22
  }
});