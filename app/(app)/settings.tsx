import { View, Text } from 'react-native';
import { router } from 'expo-router';
import { AppButton } from '@/src/components/ui/AppButton';

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#f8fafc' }}>
      <Text style={{ fontSize: 28, fontWeight: '800', color: '#0f172a' }}>Settings</Text>
      <Text style={{ marginTop: 8, color: '#475569' }}>Starter placeholders for parent controls, notifications, and subscription management.</Text>
      <View style={{ marginTop: 24 }}>
        <AppButton label="Open premium paywall" onPress={() => router.push('/modal/paywall')} />
      </View>
    </View>
  );
}
