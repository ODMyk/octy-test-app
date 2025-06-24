import React from 'react';
import { ClipPath, Defs, G, Path, Svg, SvgProps } from 'react-native-svg';

export const SwapIcon = ({
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
      <G
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        clipPath="url(#a)">
        <Path d="M11 8 7 4m0 0L3 8m4-4v16M13 16l4 4m0 0 4-4m-4 4V4" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
