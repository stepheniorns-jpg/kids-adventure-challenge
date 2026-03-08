import { ScrollView, Text, View } from 'react-native';
import { useCurrentKid } from '@/src/hooks/useCurrentKid';

export default function HomeScreen() {
  const kid = useCurrentKid();

  if (!kid) {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text>No child selected</Text></View>;
  }

  const weeklyProgress = Math.min((kid.points / kid.weeklyGoal) * 100, 100);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#ecfeff' }} contentContainerStyle={{ padding: 16 }}>
      <View style={{ backgroundColor: '#14b8a6', borderRadius: 28, padding: 20 }}>
        <Text style={{ color: 'white', opacity: 0.85 }}>This week</Text>
        <Text style={{ color: 'white', fontSize: 34, fontWeight: '800', marginTop: 4 }}>{kid.points} pts</Text>
        <Text style={{ color: 'white', marginTop: 8 }}>{kid.name} · Level {kid.level} · {kid.streak}-day streak</Text>
        <View style={{ height: 12, backgroundColor: 'rgba(255,255,255,0.25)', borderRadius: 999, marginTop: 16 }}>
          <View style={{ height: 12, width: `${weeklyProgress}%`, backgroundColor: 'white', borderRadius: 999 }} />
        </View>
        <Text style={{ color: 'white', marginTop: 8, opacity: 0.85 }}>Weekly goal {kid.points}/{kid.weeklyGoal}</Text>
      </View>
    </ScrollView>
  );
}
