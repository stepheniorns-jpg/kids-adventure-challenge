import { Link, router } from 'expo-router';
import { View, Text, TextInput } from 'react-native';
import { AppButton } from '@/src/components/ui/AppButton';

export default function SignUpScreen() {
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#f0fdf4' }}>
      <Text style={{ fontSize: 30, fontWeight: '800', color: '#14532d' }}>Create your family account</Text>
      <TextInput placeholder="Parent name" style={{ marginTop: 24, backgroundColor: 'white', borderRadius: 16, padding: 14 }} />
      <TextInput placeholder="Email" style={{ marginTop: 12, backgroundColor: 'white', borderRadius: 16, padding: 14 }} />
      <TextInput placeholder="Password" secureTextEntry style={{ marginTop: 12, backgroundColor: 'white', borderRadius: 16, padding: 14 }} />
      <View style={{ marginTop: 16 }}>
        <AppButton label="Create account" onPress={() => router.replace('/(app)/family')} />
      </View>
      <Link href="/(auth)/sign-in" style={{ marginTop: 16, color: '#15803d' }}>Already have an account?</Link>
    </View>
  );
}
