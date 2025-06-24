import { useTheme } from '@/theme';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const { Colors, Fonts } = useTheme();

  return StyleSheet.create({
    text: {
      color: Colors.textPrimary,
      fontFamily: Fonts.regular,
    },
  });
};
