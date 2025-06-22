import React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';

export const ChevronDownIcon = ({
  color,
  height = 24,
  width = 24,
  ...props
}: SvgProps) => {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      transform="rotate(90)"
      width={width}
      height={height}
      {...props}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m9 6 6 6-6 6"
      />
    </Svg>
  );
};
