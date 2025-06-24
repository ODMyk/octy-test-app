import React from 'react';
import { Path, Svg, SvgProps } from 'react-native-svg';

export const Image1 = ({
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
        d="m21.9 11.553-3-6a.846.846 0 0 0-.164-.225A.987.987 0 0 0 18 5h-5V3a1 1 0 0 0-2 0v2H6a.987.987 0 0 0-.731.328.846.846 0 0 0-.164.225l-3 6a.982.982 0 0 0-.1.447H2a4 4 0 0 0 8 0h-.01a.982.982 0 0 0-.1-.447L7.618 7H11v13H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2h-5V7h3.382l-2.277 4.553a.982.982 0 0 0-.1.447H14a4 4 0 0 0 8 0h-.01a.982.982 0 0 0-.09-.447ZM7.882 12H4.118L6 8.236Zm8.236 0L18 8.236 19.882 12Z"
      />
    </Svg>
  );
};
