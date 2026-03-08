import { Alert, ScrollView } from 'react-native';
import { useState } from 'react';
import { ChallengeCard } from '@/src/components/challenges/ChallengeCard';
import { useFamilyStore } from '@/src/store/family.store';
import { useCurrentKid } from '@/src/hooks/useCurrentKid';
import { runChallengeCompletionFlow } from '@/src/hooks/useChallengeCompletion';

export default function ChallengesScreen() {
  const challenges = useFamilyStore((s) => s.challenges);
  const awardPoints = useFamilyStore((s) => s.awardPoints);
  const kid = useCurrentKid();
  const [loadingId, setLoadingId] = useState<string | null>(null);

  async function handleComplete(challengeId: string) {
    if (!kid) return;
    const challenge = challenges.find((c) => c.id === challengeId);
    if (!challenge) return;

    try {
      setLoadingId(challengeId);
      await runChallengeCompletionFlow(challenge, kid);
      awardPoints(kid.id, challenge.points);
      Alert.alert('Success', 'Challenge completion submitted.');
    } catch (error) {
      Alert.alert('Could not complete challenge', error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setLoadingId(null);
    }
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f8fafc' }} contentContainerStyle={{ padding: 16 }}>
      {challenges.map((challenge) => (
        <ChallengeCard
          key={challenge.id}
          challenge={challenge}
          busy={loadingId === challenge.id}
          onComplete={() => handleComplete(challenge.id)}
        />
      ))}
    </ScrollView>
  );
}
