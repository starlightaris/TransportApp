import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProfileScreen({ navigation }: any) {
  // Hardcoded temporary data reflecting what will eventually pull from Firestore
  const passengerProfile = {
    name: "Alex Fernando",
    empId: "EMP-2026-894",
    pickupLocation: "123 Galle Road, Colombo 03",
    dropoffLocation: "Not Set yet"
  };

  const handleEditLocation = (mode: 'Pickup' | 'Drop-off') => {
    if (navigation) {
      navigation.navigate('EditLocationScreen', { mode });
    } else {
      console.log(`Maps to EditLocationScreen with mode: ${mode}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarPlaceholder} />
        <Text style={styles.userName}>{passengerProfile.name}</Text>
        <Text style={styles.userSub}>{passengerProfile.empId}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Transport Details</Text>
        
        {/* Pickup Card */}
        <View style={styles.locationCard}>
          <View>
            <Text style={styles.cardLabel}>PICKUP LOCATION</Text>
            <Text style={styles.cardAddress}>{passengerProfile.pickupLocation}</Text>
          </View>
          <TouchableOpacity style={styles.editBtn} onPress={() => handleEditLocation('Pickup')}>
            <Text style={styles.editBtnText}>Change</Text>
          </TouchableOpacity>
        </View>

        {/* Drop-off Card */}
        <View style={styles.locationCard}>
          <View>
            <Text style={styles.cardLabel}>DROP-OFF LOCATION</Text>
            <Text style={styles.cardAddress}>{passengerProfile.dropoffLocation}</Text>
          </View>
          <TouchableOpacity style={styles.editBtn} onPress={() => handleEditLocation('Drop-off')}>
            <Text style={styles.editBtnText}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA', paddingTop: 60 },
  profileHeader: { alignItems: 'center', marginBottom: 30 },
  avatarPlaceholder: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#E1E5EB', marginBottom: 10 },
  userName: { fontSize: 22, fontWeight: 'bold', color: '#1D3557' },
  userSub: { fontSize: 14, color: '#A0A0A0', marginTop: 4 },
  infoSection: { paddingHorizontal: 20 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#1D3557', marginBottom: 15 },
  locationCard: { backgroundColor: '#FFF', padding: 16, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15, elevation: 1 },
  cardLabel: { fontSize: 11, fontWeight: 'bold', color: '#A0A0A0', marginBottom: 4 },
  cardAddress: { fontSize: 14, color: '#1D3557', fontWeight: '500', width: 200 },
  editBtn: { backgroundColor: '#F1FAEE', paddingVertical: 8, paddingHorizontal: 14, borderRadius: 6 },
  editBtnText: { color: '#457B9D', fontWeight: '600', fontSize: 13 }
});