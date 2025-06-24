import React from 'react';
import { Path, Svg, SvgProps } from 'react-native-svg';

export const CheckIcon = ({
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
        d="M4 12.611 8.923 17.5 20 6.5"
      />
    </Svg>
  );
};
