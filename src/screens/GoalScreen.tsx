import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { useHydrationStore } from '../store/hydrationStore';
import { COLORS } from '../theme/colors';

export default function GoalScreen() {
  const { goal, setGoal } = useHydrationStore();
  const [value, setValue] = useState(String(goal));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meta diária</Text>

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        keyboardType="numeric"
        placeholder="2000"
        placeholderTextColor="#777"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => setGoal(Number(value))}
      >
        <Text style={styles.buttonText}>Salvar meta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    padding: 24
  },
  title: {
    color: COLORS.text,
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24
  },
  input: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 18,
    color: COLORS.text,
    fontSize: 18
  },
  button: {
    marginTop: 20,
    backgroundColor: COLORS.primary,
    padding: 18,
    borderRadius: 16
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
});