import { Challenge, KidProfile } from '@/src/types/domain';
import { verifyLocationChallenge } from '@/src/hooks/useLocationVerification';
import { pickProofPhoto } from '@/src/hooks/usePhotoProof';
import { uploadChallengePhoto } from '@/src/features/media/upload.service';
import { submitChallengeCompletion } from '@/src/features/challenges/challenge.service';

export async function runChallengeCompletionFlow(challenge: Challenge, kid: KidProfile) {
  let gpsVerified = false;
  let photoUrl: string | undefined;

  if (challenge.requiresGps) {
    await verifyLocationChallenge();
    gpsVerified = true;
  }

  if (challenge.requiresPhoto) {
    const photo = await pickProofPhoto();
    photoUrl = await uploadChallengePhoto(photo.uri);
  }

  return submitChallengeCompletion({
    challengeId: challenge.id,
    kidId: kid.id,
    gpsVerified,
    photoUrl,
  });
}
