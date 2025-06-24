import { useTheme } from '@/theme';
import { useWindowDimensions } from 'react-native';
import {
  Extrapolation,
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';

export const useStyles = (index: number, x: SharedValue<number>) => {
  const { width } = useWindowDimensions();
  const { Colors, rem } = useTheme();
  const widthInter = width - rem(32);

  const derived = useDerivedValue(() => {
    return x.value;
  }, [x]);

  const animatedColors = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      derived.value / widthInter,
      [index - 1, index, index + 1],
      [Colors.border, Colors.primary, Colors.border],
    );

    const interpolateOpacity = interpolate(
      derived.value / widthInter,
      [index - 1, index, index + 1],
      [0.6, 1, 0.6],
      Extrapolation.CLAMP,
    );

    return {
      backgroundColor,
      height: interpolateOpacity * 10,
      width: interpolateOpacity * 10,
      borderRadius: interpolateOpacity * 5,
      opacity: 1,
    };
  });

  return { dot: animatedColors };
};
