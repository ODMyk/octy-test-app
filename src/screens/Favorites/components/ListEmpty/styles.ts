import { useTheme } from '@/theme';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useStyles = () => {
  const { rem } = useTheme();
  const { height } = useWindowDimensions();
  const { top, bottom } = useSafeAreaInsets();

  return StyleSheet.create({
    container: {
      height: height - rem(64) - top - bottom,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: rem(16),
    },
  });
};
