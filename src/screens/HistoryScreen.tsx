import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico</Text>
      <Text style={styles.subtitle}>
        Seu consumo diário aparecerá aqui.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: COLORS.text,
    fontSize: 28,
    fontWeight: '700'
  },
  subtitle: {
    color: COLORS.muted,
    marginTop: 12
  }
});