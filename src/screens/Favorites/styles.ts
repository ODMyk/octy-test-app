import { useTheme } from '@/theme';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const { Colors, rem } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
      paddingHorizontal: rem(16),
      paddingTop: rem(16),
    },
    refreshControl: {
      color: Colors.primary,
    },
  });
};
