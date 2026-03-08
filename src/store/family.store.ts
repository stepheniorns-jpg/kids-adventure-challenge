import { create } from 'zustand';
import { Challenge, KidProfile, Reward } from '@/src/types/domain';

const starterKids: KidProfile[] = [
  { id: 'kid-1', name: 'Ava', age: 8, level: 4, points: 165, weeklyGoal: 220, streak: 6 },
  { id: 'kid-2', name: 'Max', age: 6, level: 2, points: 72, weeklyGoal: 120, streak: 3 },
];

const starterChallenges: Challenge[] = [
  { id: 'c1', title: 'Run 1 km', category: 'Run', points: 20, badgeName: 'Speed Sprout', difficulty: 'Easy', requiresGps: true, requiresPhoto: false },
  { id: 'c2', title: 'Find 3 different birds', category: 'Nature', points: 25, badgeName: 'Bird Spotter', difficulty: 'Easy', requiresGps: false, requiresPhoto: true },
  { id: 'c3', title: 'Climb a local hill', category: 'Explore', points: 40, badgeName: 'Hill Hero', difficulty: 'Medium', requiresGps: true, requiresPhoto: true },
];

const starterRewards: Reward[] = [
  { id: 'r1', title: 'Choose family dessert', costPoints: 80 },
  { id: 'r2', title: 'Pick Saturday adventure', costPoints: 120 },
];

type FamilyState = {
  kids: KidProfile[];
  challenges: Challenge[];
  rewards: Reward[];
  activeKidId: string;
  setActiveKidId: (kidId: string) => void;
  awardPoints: (kidId: string, amount: number) => void;
  redeemReward: (kidId: string, cost: number) => void;
};

export const useFamilyStore = create<FamilyState>((set) => ({
  kids: starterKids,
  challenges: starterChallenges,
  rewards: starterRewards,
  activeKidId: starterKids[0].id,
  setActiveKidId: (activeKidId) => set({ activeKidId }),
  awardPoints: (kidId, amount) =>
    set((state) => ({
      kids: state.kids.map((kid) =>
        kid.id === kidId
          ? { ...kid, points: kid.points + amount, streak: kid.streak + 1 }
          : kid
      ),
    })),
  redeemReward: (kidId, cost) =>
    set((state) => ({
      kids: state.kids.map((kid) =>
        kid.id === kidId && kid.points >= cost
          ? { ...kid, points: kid.points - cost }
          : kid
      ),
    })),
}));
