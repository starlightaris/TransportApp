import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapPicker from '../../components/MapPicker'; // Adjust relative path based on your exact tree

export default function EditLocationScreen({ route, navigation }: any) {
  const { mode } = route?.params || { mode: 'Pickup' };
  
  // State to hold the final selection from the child MapPicker component
  const [currentSelection, setCurrentSelection] = useState<{
    address: string;
    latitude: number;
    longitude: number;
  } | null>(null);

  const handleSaveToBackend = () => {
    if (currentSelection) {
      // TODO: This is where your upcoming Firestore update function will go!
      console.log(`[Firestore Commit] Saving ${mode}:`, currentSelection);
      
      if (navigation) navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Set {mode} Point</Text>
      </View>

      <View style={styles.mapWrapper}>
        <MapPicker 
          mode={mode} 
          onLocationConfirmed={(address, latitude, longitude) => {
            setCurrentSelection({ address, latitude, longitude });
          }}
        />
      </View>

      <View style={styles.actionPanel}>
        <TouchableOpacity 
          style={styles.confirmButton} 
          onPress={handleSaveToBackend}
          disabled={!currentSelection}
        >
          <Text style={styles.confirmButtonText}>Confirm & Save Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { paddingTop: 50, paddingBottom: 15, paddingHorizontal: 20, borderBottomWidth: 1, borderColor: '#EEE' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#1D3557' },
  mapWrapper: { flex: 1 },
  actionPanel: { padding: 20, backgroundColor: '#FFF' },
  confirmButton: { backgroundColor: '#1D3557', padding: 16, borderRadius: 10, alignItems: 'center' },
  confirmButtonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 }
});