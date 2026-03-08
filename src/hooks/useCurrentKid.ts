import { useMemo } from 'react';
import { useFamilyStore } from '@/src/store/family.store';

export function useCurrentKid() {
  const kids = useFamilyStore((s) => s.kids);
  const activeKidId = useFamilyStore((s) => s.activeKidId);

  return useMemo(() => kids.find((k) => k.id === activeKidId) ?? null, [kids, activeKidId]);
}
