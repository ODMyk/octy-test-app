import { useTheme } from '@/theme';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const { Colors, rem } = useTheme();

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.card,
      borderRadius: rem(10),
      gap: rem(8),
      paddingVertical: rem(8),
      paddingHorizontal: rem(16),
      marginBottom: rem(16),
    },
    content: {
      flex: 1,
    },
    title: {
      fontSize: rem(14),
    },
    rate: {
      fontSize: rem(16),
      fontWeight: 700,
    },
    difference: {
      fontSize: rem(12),
    },
    differencePositive: {
      color: Colors.success,
    },
    differenceNegative: {
      color: Colors.error,
    },
    starIcon: {
      height: rem(32),
      width: rem(32),
      color: Colors.primary,
    },
  });
};
