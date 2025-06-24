import { useTheme } from '@/theme';
import { rem } from '@/theme/rem';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useStyles = () => {
  const { Colors } = useTheme();
  const { bottom } = useSafeAreaInsets();

  return StyleSheet.create({
    container: {
      backgroundColor: Colors.card,
      borderTopColor: Colors.border,
      borderTopWidth: rem(1),
      height: rem(50) + bottom,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: rem(16),
      paddingBottom: bottom,
      flex: 1,
    },
    label: {
      color: Colors.textSecondary,
      fontSize: rem(12),
      fontWeight: 500,
    },
    active: {
      backgroundColor: Colors.primary,
    },
    textActive: {
      color: Colors.textLight,
    },
  });
};
