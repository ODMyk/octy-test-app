import { useTheme } from '@/theme';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const { Colors, rem } = useTheme();

  return StyleSheet.create({
    container: {
      padding: rem(16),
      flex: 1,
      backgroundColor: Colors.background,
      gap: rem(16),
    },
    goBackButton: {
      padding: rem(8),
      borderRadius: rem(10),
      flexDirection: 'row',
      alignItems: 'center',
      gap: rem(2),
      width: '100%',
      backgroundColor: Colors.primary,
    },
    goBackIcon: {
      height: rem(28),
      width: rem(28),
      color: Colors.textLight,
    },
    goBackText: {
      fontSize: rem(16),
      color: Colors.textLight,
    },
    card: {
      backgroundColor: Colors.card,
      borderRadius: rem(10),
      padding: rem(16),
    },
    title: {
      fontSize: rem(20),
      fontWeight: 700,
    },
    titleFull: {
      fontSize: rem(14),
      color: Colors.textSecondary,
    },
    rate: {
      textAlign: 'center',
      fontSize: rem(24),
      fontWeight: 700,
      marginTop: rem(16),
    },
    difference: {
      fontSize: rem(14),
      textAlign: 'center',
    },
    differencePositive: {
      color: Colors.success,
    },
    differenceNegative: {
      color: Colors.error,
    },
    favoritesButton: {
      marginTop: rem(16),
    },
  });
};
