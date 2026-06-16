import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DriverHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🚐 Driver Home (coming soon)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18 },
});