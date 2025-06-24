import { RATES_TITLES } from '@/constants/rates';
import { useMainStore } from '@/stores/main';
import { Rate, RateEntryLong, RatePair } from '@/types/rates';
import { useRates } from './useRates';

interface HookReturnSuccess extends RateEntryLong {
  isFavorite: boolean;
  toggleFavorite: () => void;
  isSuccess: boolean;
}

export const useRatePair = (pair: RatePair) => {
  const { toggleFavorite, favorites } = useMainStore();
  const { euroRates, oldEuroRates } = useRates();

  if (!euroRates) {
    return { isSuccess: false };
  }

  const rate = euroRates[pair.target as Rate] / euroRates[pair.base as Rate];

  const entry: RateEntryLong = {
    rate,
    base: pair.base,
    target: pair.target,
    baseTitle: RATES_TITLES[pair.base],
    targetTitle: RATES_TITLES[pair.target],
  };

  if (oldEuroRates) {
    const oldRate =
      oldEuroRates[pair.target as Rate] / oldEuroRates[pair.base as Rate];
    entry.difference = rate - oldRate;
    entry.percentage = (entry.difference / oldRate) * 100;
  }

  const isFavorite = favorites.some(
    favorite => favorite.base === pair.base && favorite.target === pair.target,
  );

  return {
    ...entry,
    isSuccess: true,
    isFavorite,
    toggleFavorite: () => toggleFavorite(pair),
  };
};

export function checkSuccess(
  data: HookReturnSuccess | { isSuccess: boolean },
): data is HookReturnSuccess {
  return data.isSuccess;
}
