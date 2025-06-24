import { useTheme } from '@/theme';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useStyles = () => {
  const { Colors, rem } = useTheme();
  const { top } = useSafeAreaInsets();

  return StyleSheet.create({
    wrapper: {
      paddingHorizontal: rem(16),
      paddingTop: top,
      backgroundColor: Colors.card,
      borderBottomColor: Colors.border,
      borderBottomWidth: rem(1),
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    container: {
      paddingVertical: rem(16),
      flexDirection: 'row',
      alignItems: 'center',
      gap: rem(8),
    },
    indicator: {
      height: rem(16),
      width: rem(16),
      borderRadius: rem(8),
    },
    actual: {
      backgroundColor: Colors.freshData,
    },
    expired: {
      backgroundColor: Colors.offline,
    },
    loading: {
      backgroundColor: Colors.loading,
    },
    error: {
      backgroundColor: Colors.error,
    },
    refetchButton: {
      padding: rem(4),
    },
    refetchIcon: {
      height: rem(24),
      width: rem(24),
      color: Colors.textPrimary,
    },
  });
};
