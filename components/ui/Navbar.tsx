import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Navbar({ onMenuPress }: { onMenuPress: () => void }) {
    const styles = StyleSheet.create({
        navbar: {
          height: 56,
          backgroundColor: '#FFFFFF',
          borderBottomWidth: 1,
          borderBottomColor: '#E2E8F0',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
        },
        menuBtn: {
          width: 36, height: 36,
          borderRadius: 10,
          backgroundColor: '#F1F5F9',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 5,
        },
        line: {
          width: 18, height: 2,
          backgroundColor: '#334155',
          borderRadius: 2,
        },
        brand: {
          fontSize: 15,
          fontWeight: '600',
          color: '#0F172A',
        },
        brandAccent: {
          color: '#0F766E',
        },
        avatar: {
          width: 32, height: 32,
          borderRadius: 16,
          backgroundColor: '#0F766E',
          alignItems: 'center',
          justifyContent: 'center',
        },
        avatarText: {
          fontSize: 12,
          fontWeight: '600',
          color: '#FFFFFF',
        },
      });
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.menuBtn} onPress={onMenuPress}>
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />
      </TouchableOpacity>
      <Text style={styles.brand}>Prop<Text style={styles.brandAccent}>Core</Text></Text>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>AK</Text>
      </View>
    </View>
  );
}

