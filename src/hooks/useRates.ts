import { STALE_TIME } from '@/constants/api';
import { api } from '@/services/api';
import { useMainStore } from '@/stores/main';
import { Rate, RateEntry } from '@/types/rates';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

const queryKey = ['rates'];

export const useRates = () => {
  const { selectedBaseCurrency, favorites, oldQuery, setCurrentQuery } =
    useMainStore();

  const { data, isFetching, isError, error, refetch } = useQuery({
    queryKey,
    queryFn: async () => {
      const res = await api.getRates(false);
      setCurrentQuery(res);
      return res;
    },
    staleTime: STALE_TIME,
    refetchInterval: STALE_TIME,
    refetchIntervalInBackground: true,
    refetchOnReconnect: true,
  });

  const calculatedRates = useMemo(() => {
    if (!data) return null;

    const targetRate = data.rates[selectedBaseCurrency as Rate];
    const rates = Object.entries(data.rates)
      .map(([key, value]) => {
        const rate = value / targetRate;
        const result: RateEntry = {
          base: selectedBaseCurrency,
          target: key as Rate,
          rate,
        };

        if (oldQuery) {
          const oldRate =
            oldQuery.rates[key as Rate] /
            oldQuery.rates[selectedBaseCurrency as Rate];
          result.difference = rate - oldRate;
          result.percentage = (result.difference / oldRate) * 100;
        }

        return result;
      })
      .filter(e => e.base !== e.target);

    const favoriteRates = favorites.map(favorite => {
      const rate = data.rates[favorite.target] / data.rates[favorite.base];
      const entry: RateEntry = {
        ...favorite,
        rate,
      };

      if (oldQuery) {
        const oldRate =
          oldQuery.rates[favorite.target] / oldQuery.rates[favorite.base];
        entry.difference = rate - oldRate;
        entry.percentage = (entry.difference / oldRate) * 100;
      }

      return entry;
    });

    return { rates, favoriteRates };
  }, [data, selectedBaseCurrency, favorites, oldQuery]);

  return {
    ...calculatedRates,
    isLoading: isFetching,
    isError,
    error,
    refetch: () => refetch(),
    fetchedAt: data?.fetchedAt,
    previousFetchedAt: oldQuery?.fetchedAt,
    euroRates: data?.rates,
    oldEuroRates: oldQuery?.rates,
  };
};
