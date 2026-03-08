import * as ImagePicker from 'expo-image-picker';

export async function pickProofPhoto() {
  const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!permission.granted) {
    throw new Error('Photo permission not granted');
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images'],
    allowsEditing: true,
    quality: 0.8,
  });

  if (result.canceled) {
    throw new Error('Photo selection cancelled');
  }

  return result.assets[0];
}
