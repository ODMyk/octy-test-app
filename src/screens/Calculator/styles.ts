import { useTheme } from '@/theme';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const { Colors, rem } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
      padding: rem(16),
    },
    card: {
      backgroundColor: Colors.card,
      padding: rem(16),
      borderRadius: rem(10),
      gap: rem(16),
    },
    row: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      gap: rem(16),
    },
    flex: {
      flex: 1,
    },
    swapButton: {
      backgroundColor: Colors.primary,
      padding: rem(12),
      borderRadius: rem(10),
      alignItems: 'center',
      justifyContent: 'center',
    },
    swapIcon: {
      height: rem(24),
      width: rem(24),
      color: Colors.textLight,
    },
    resultText: {
      fontSize: rem(16),
      paddingLeft: rem(4),
    },
    errorContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    errorText: {
      fontSize: rem(16),
    },
  });
};
