import { useTheme } from '@/theme';
import { rem } from '@/theme/rem';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const { Colors } = useTheme();

  return StyleSheet.create({
    button: {
      paddingVertical: rem(12),
      paddingHorizontal: rem(16),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    text: {
      fontSize: rem(16),
    },
    selected: {
      fontWeight: 700,
    },
    icon: {
      height: rem(24),
      width: rem(24),
      color: Colors.primary,
    },
  });
};
