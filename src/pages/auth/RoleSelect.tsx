import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'RoleSelect'>;

export default function RoleSelect({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome! </Text>
      <Text style={styles.subtitle}>Are you a Driver or a Passenger?</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('DriverRegisterStep1')}
      >
        <Text style={styles.btnText}>I'm a Driver </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.btn, styles.btnGreen]}
        onPress={() => navigation.navigate('PassengerRegister')}
      >
        <Text style={styles.btnText}>I'm a Passenger </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 32 },
  btn: {
    backgroundColor: '#2563eb',
    paddingVertical: 16,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  btnGreen: { backgroundColor: '#16a34a' },
  btnText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});