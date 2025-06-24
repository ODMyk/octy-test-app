import React from 'react';
import Animated, { SharedValue } from 'react-native-reanimated';

import { useStyles } from './styles';

interface DotProps {
  index: number;
  x: SharedValue<number>;
}

export const SliderDot = ({ x, index }: DotProps) => {
  const styles = useStyles(index, x);

  return <Animated.View style={styles.dot} />;
};
