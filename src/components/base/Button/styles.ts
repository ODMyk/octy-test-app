import { useTheme } from '@/theme';
import { rem } from '@/theme/rem';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const { Colors } = useTheme();

  return StyleSheet.create({
    button: {
      backgroundColor: Colors.primary,
      padding: rem(16),
      borderRadius: rem(10),
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: Colors.textLight,
      fontSize: rem(16),
      fontWeight: 700,
    },
  });
};
