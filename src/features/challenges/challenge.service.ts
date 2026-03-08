export async function submitChallengeCompletion(input: {
  challengeId: string;
  kidId: string;
  gpsVerified: boolean;
  photoUrl?: string;
}) {
  // Replace with a real insert into Supabase.
  return {
    id: `${input.challengeId}-${Date.now()}`,
    status: 'pending',
    ...input,
  };
}
