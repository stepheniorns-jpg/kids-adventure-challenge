import { ScrollView, Text, Pressable, View } from 'react-native';
import { useFamilyStore } from '@/src/store/family.store';

export default function FamilyScreen() {
  const kids = useFamilyStore((s) => s.kids);
  const activeKidId = useFamilyStore((s) => s.activeKidId);
  const setActiveKidId = useFamilyStore((s) => s.setActiveKidId);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#ecfdf5' }} contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 28, fontWeight: '800', color: '#14532d', marginBottom: 12 }}>Family</Text>
      {kids.map((kid) => (
        <Pressable
          key={kid.id}
          onPress={() => setActiveKidId(kid.id)}
          style={{
            backgroundColor: kid.id === activeKidId ? '#10b981' : 'white',
            borderRadius: 24,
            padding: 16,
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: '700', color: kid.id === activeKidId ? 'white' : '#0f172a' }}>{kid.name}</Text>
          <Text style={{ marginTop: 4, color: kid.id === activeKidId ? 'rgba(255,255,255,0.9)' : '#64748b' }}>
            Age {kid.age} · Level {kid.level} · {kid.points} points
          </Text>
        </Pressable>
      ))}
      <View style={{ backgroundColor: 'white', borderRadius: 24, padding: 16 }}>
        <Text style={{ fontWeight: '700', color: '#0f172a' }}>Next build step</Text>
        <Text style={{ marginTop: 8, color: '#475569' }}>Add family onboarding, profile creation, parent approvals, and subscriptions.</Text>
      </View>
    </ScrollView>
  );
}
