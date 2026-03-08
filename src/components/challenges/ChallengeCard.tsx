import { View, Text } from 'react-native';
import { AppButton } from '@/src/components/ui/AppButton';
import { Challenge } from '@/src/types/domain';

type Props = {
  challenge: Challenge;
  onComplete: () => void;
  busy?: boolean;
};

export function ChallengeCard({ challenge, onComplete, busy }: Props) {
  return (
    <View style={{ backgroundColor: 'white', borderRadius: 24, padding: 16, marginBottom: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: '700', color: '#0f172a' }}>{challenge.title}</Text>
      <Text style={{ marginTop: 4, color: '#64748b' }}>
        {challenge.category} · {challenge.difficulty} · +{challenge.points} pts
      </Text>
      <Text style={{ marginTop: 8, color: '#475569' }}>
        {challenge.requiresGps ? 'GPS required' : 'No GPS'} · {challenge.requiresPhoto ? 'Photo proof required' : 'No photo proof'}
      </Text>
      <View style={{ marginTop: 16 }}>
        <AppButton label="Complete challenge" onPress={onComplete} loading={busy} />
      </View>
    </View>
  );
}
