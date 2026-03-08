import { View, Text } from 'react-native';
import { router } from 'expo-router';
import { AppButton } from '@/src/components/ui/AppButton';

export default function PaywallModal() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(15,23,42,0.35)' }}>
      <View style={{ backgroundColor: 'white', borderTopLeftRadius: 32, borderTopRightRadius: 32, padding: 24 }}>
        <Text style={{ fontSize: 28, fontWeight: '800', color: '#0f172a' }}>Unlock Family Premium</Text>
        <Text style={{ marginTop: 8, color: '#475569' }}>
          Multiple kids, GPS verification, photo proof, premium adventure packs, and longer history.
        </Text>
        <View style={{ marginTop: 20, gap: 12 }}>
          <AppButton label="Start free trial" onPress={() => router.back()} />
          <AppButton label="Maybe later" onPress={() => router.back()} disabled={false} />
        </View>
      </View>
    </View>
  );
}
