import { Typography } from '@/components/base/Typography';
import React from 'react';
import { View } from 'react-native';
import Animated, { SharedValue } from 'react-native-reanimated';

import { useStyles } from './styles';

interface SlideProps {
  title: string;
  subtitle?: string;
  image: React.ReactNode;
  x: SharedValue<number>;
  index: number;
  additional?: React.ReactNode;
}

export const Slide = ({
  title,
  subtitle,
  image,
  x,
  index,
  additional,
}: SlideProps) => {
  const { styles, animated } = useStyles(index, x);

  return (
    <Animated.View style={[styles.container, animated.container]}>
      <View style={styles.imageWrapper}>{image}</View>
      <View style={styles.textWrapper}>
        <Typography style={styles.title}>{title}</Typography>
        {subtitle && (
          <Typography style={styles.subTitle}>{subtitle}</Typography>
        )}
        {additional}
      </View>
    </Animated.View>
  );
};
