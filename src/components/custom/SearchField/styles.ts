import { useTheme } from '@/theme';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const { Colors, rem } = useTheme();

  return StyleSheet.create({
    icon: {
      height: rem(20),
      width: rem(20),
      color: Colors.textPrimary,
    },
  });
};
