import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { registerUser } from '../../services/authService';
import { isValidEmail, isValidMobile, isStrongPassword, passwordStrengthMessage } from '../../utils/validation';

type Props = NativeStackScreenProps<RootStackParamList, 'DriverRegisterStep1'>;

export default function DriverRegisterStep1({ navigation }: Props) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleNext = async () => {
    if (!name.trim()) return Alert.alert('Oops', 'Please type your name');
    if (!isValidMobile(mobile)) return Alert.alert('Oops', 'Please type a valid mobile number');
    if (!isValidEmail(email)) return Alert.alert('Oops', 'Please type a valid email');
    if (!isStrongPassword(password)) return Alert.alert('Oops', passwordStrengthMessage(password));
    if (password !== confirmPassword) return Alert.alert('Oops', 'Passwords do not match');

    try {
      setLoading(true);
      const uid = await registerUser(email.trim(), password, {
        name: name.trim(),
        mobile: mobile.trim(),
        role: 'driver',
      });
      navigation.navigate('DriverRegisterStep2', { uid, name: name.trim() });
    } catch (err: any) {
      Alert.alert('Something went wrong', err.message ?? 'Please try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Driver Sign Up</Text>
      <Text style={styles.step}>Step 1 of 2 — Your Details</Text>

      <Text style={styles.label}>Full Name</Text>
      <TextInput style={styles.input} placeholder="e.g. Kamal Perera" value={name} onChangeText={setName} />

      <Text style={styles.label}>Mobile Number</Text>
      <TextInput style={styles.input} placeholder="e.g. 0771234567" value={mobile} onChangeText={setMobile} keyboardType="phone-pad" />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="e.g. kamal@email.com" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />

      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} placeholder="At least 8 characters" value={password} onChangeText={setPassword} secureTextEntry />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput style={styles.input} placeholder="Type it again" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />

      <TouchableOpacity style={styles.btn} onPress={handleNext} disabled={loading}>
        <Text style={styles.btnText}>{loading ? 'Please wait...' : 'Next →'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24 },
  title: { fontSize: 24, fontWeight: '700', marginTop: 20 },
  step: { fontSize: 14, color: '#666', marginBottom: 20 },
  label: { fontSize: 13, color: '#444', marginBottom: 4, marginTop: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 4 },
  btn: { backgroundColor: '#2563eb', padding: 16, borderRadius: 10, alignItems: 'center', marginTop: 24 },
  btnText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});