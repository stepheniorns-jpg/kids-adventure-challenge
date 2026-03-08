import { Alert, ScrollView, Text, View } from 'react-native';
import { AppButton } from '@/src/components/ui/AppButton';
import { useFamilyStore } from '@/src/store/family.store';
import { useCurrentKid } from '@/src/hooks/useCurrentKid';

export default function RewardsScreen() {
  const rewards = useFamilyStore((s) => s.rewards);
  const redeemReward = useFamilyStore((s) => s.redeemReward);
  const kid = useCurrentKid();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f8fafc' }} contentContainerStyle={{ padding: 16 }}>
      {rewards.map((reward) => (
        <View key={reward.id} style={{ backgroundColor: 'white', borderRadius: 24, padding: 16, marginBottom: 12 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#0f172a' }}>{reward.title}</Text>
          <Text style={{ marginTop: 4, color: '#64748b' }}>{reward.costPoints} points</Text>
          <View style={{ marginTop: 16 }}>
            <AppButton
              label="Redeem"
              disabled={!kid || kid.points < reward.costPoints}
              onPress={() => {
                if (!kid) return;
                redeemReward(kid.id, reward.costPoints);
                Alert.alert('Redeemed', `${kid.name} redeemed ${reward.title}`);
              }}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
