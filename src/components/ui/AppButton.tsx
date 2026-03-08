import { ActivityIndicator, Pressable, Text } from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export function AppButton({ label, onPress, disabled, loading }: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={{
        height: 48,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#10b981',
        opacity: disabled || loading ? 0.5 : 1,
      }}
    >
      {loading ? <ActivityIndicator color="#fff" /> : <Text style={{ color: '#fff', fontWeight: '700' }}>{label}</Text>}
    </Pressable>
  );
}
