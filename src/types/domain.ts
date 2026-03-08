export type ChallengeCategory = 'Adventure' | 'Run' | 'Nature' | 'Explore' | 'Family';

export type KidProfile = {
  id: string;
  name: string;
  age: number;
  level: number;
  points: number;
  weeklyGoal: number;
  streak: number;
};

export type Challenge = {
  id: string;
  title: string;
  category: ChallengeCategory;
  points: number;
  badgeName: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  requiresGps: boolean;
  requiresPhoto: boolean;
};

export type Reward = {
  id: string;
  title: string;
  costPoints: number;
};
