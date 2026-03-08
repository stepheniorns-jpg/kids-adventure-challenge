import { Link, router } from 'expo-router';
import { View, Text, TextInput } from 'react-native';
import { AppButton } from '@/src/components/ui/AppButton';

export default function SignInScreen() {
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#ecfdf5' }}>
      <Text style={{ fontSize: 30, fontWeight: '800', color: '#064e3b' }}>Welcome back</Text>
      <Text style={{ marginTop: 8, color: '#065f46' }}>Parent sign-in placeholder for the starter project.</Text>
      <TextInput placeholder="Email" style={{ marginTop: 24, backgroundColor: 'white', borderRadius: 16, padding: 14 }} />
      <TextInput placeholder="Password" secureTextEntry style={{ marginTop: 12, backgroundColor: 'white', borderRadius: 16, padding: 14 }} />
      <View style={{ marginTop: 16 }}>
        <AppButton label="Continue" onPress={() => router.replace('/(app)/home')} />
      </View>
      <Link href="/(auth)/sign-up" style={{ marginTop: 16, color: '#047857' }}>Create account</Link>
    </View>
  );
}
