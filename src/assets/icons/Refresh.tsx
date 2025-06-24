import React from 'react';
import { Path, Svg, SvgProps } from 'react-native-svg';

export const RefreshIcon = ({
  color,
  height = 24,
  width = 24,
  ...props
}: SvgProps) => {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      {...props}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.938 13A8 8 0 0 0 5.8 6.944M4.062 11A8 8 0 0 0 18 17.292M15 17h3v.292M5.8 4v2.944m0 0V7h3M18 20v-2.708"
      />
    </Svg>
  );
};
