import { useTheme } from '@/theme';
import { StyleSheet, useWindowDimensions } from 'react-native';
import {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';

export const useStyles = (index: number, x: SharedValue<number>) => {
  const { Colors, rem } = useTheme();
  const { width } = useWindowDimensions();
  const widthInter = width - rem(32);

  const derivedX = useDerivedValue(() => {
    return x.value;
  }, [x]);

  const animatedStyles = useAnimatedStyle(() => {
    const interpolatedOpacity = interpolate(
      derivedX.value / widthInter,
      [index - 1, index, index + 1],
      [-1, 1, -1],
      Extrapolation.CLAMP,
    );

    const interpolatedScale = interpolate(
      derivedX.value / widthInter,
      [index - 1, index, index + 1],
      [0.3, 1, 0.3],
      Extrapolation.CLAMP,
    );

    return {
      opacity: interpolatedOpacity,
      transform: [{ scale: interpolatedScale }],
    };
  });

  return {
    styles: StyleSheet.create({
      container: {
        flex: 1,
        width: width - rem(32),
      },
      title: {
        color: Colors.textPrimary,
        fontSize: rem(20),
        textAlign: 'center',
      },
      subTitle: {
        color: Colors.textPrimary,
        fontSize: rem(16),
        textAlign: 'center',
      },
      imageWrapper: {
        flex: 1,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
      },
      textWrapper: {
        gap: rem(12),
        paddingVertical: rem(16),
      },
    }),
    animated: { container: animatedStyles },
  };
};
