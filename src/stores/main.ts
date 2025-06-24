import { api } from '@/services/api';
import { Rate, RatePair } from '@/types/rates';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { storage } from '../services/mmkv';

interface MainState {
  disclaimerSkipped: boolean;
  selectedBaseCurrency: Rate;
  favorites: RatePair[];
  oldQuery: undefined | Awaited<ReturnType<typeof api.getRates>>;
  currentQuery: undefined | Awaited<ReturnType<typeof api.getRates>>;

  setDisclaimerSkipped: (flag: boolean) => void;
  setOldQuery: (query: Awaited<ReturnType<typeof api.getRates>>) => void;
  setCurrentQuery: (query: Awaited<ReturnType<typeof api.getRates>>) => void;
  setSelectedBaseCurrency: (currency: Rate) => void;
  addFavorite: (pair: RatePair) => void;
  removeFavorite: (pair: RatePair) => void;
  toggleFavorite: (pair: RatePair) => void;
}

const zustandMmkvStorage = createJSONStorage(() => ({
  getItem: name => {
    const value = storage.getString(name);
    return value === undefined ? null : value;
  },
  setItem: (name, value) => storage.set(name, value),
  removeItem: name => storage.delete(name),
}));

export const useMainStore = create<MainState>()(
  persist(
    (set, get) => ({
      selectedBaseCurrency: Rate.EUR,
      favorites: [],
      oldQuery: undefined,
      currentQuery: undefined,
      disclaimerSkipped: false,

      setDisclaimerSkipped: flag => set({ disclaimerSkipped: flag }),

      setOldQuery: query => set({ oldQuery: query }),

      setCurrentQuery: query =>
        set(prev => ({ oldQuery: prev.currentQuery, currentQuery: query })),

      setSelectedBaseCurrency: currency =>
        set({ selectedBaseCurrency: currency }),

      addFavorite: pair =>
        set(state => ({ favorites: [...state.favorites, pair] })),

      removeFavorite: pair =>
        set(state => ({
          favorites: state.favorites.filter(fav => fav !== pair),
        })),

      toggleFavorite: pair => {
        const { favorites } = get();
        if (
          favorites.some(
            fav => fav.base === pair.base && fav.target === pair.target,
          )
        ) {
          set({
            favorites: favorites.filter(
              fav => fav.base !== pair.base || fav.target !== pair.target,
            ),
          });
        } else {
          set({ favorites: [...favorites, pair] });
        }
      },
    }),
    {
      name: 'user-settings-storage',
      storage: zustandMmkvStorage,
    },
  ),
);
