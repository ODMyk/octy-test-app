import React from 'react';
import { Path, Svg, SvgProps } from 'react-native-svg';

export const CrossIcon = ({ color, height, width, ...props }: SvgProps) => {
  return (
    <Svg
      fill="none"
      viewBox="0 -0.5 25 25"
      width={width}
      height={height}
      {...props}>
      <Path
        fill={color}
        d="M6.97 16.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm6.06-3.94a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-1.06-1.06a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm6.06-3.94a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-5 3.94a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.94 6.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-5-5a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM8.03 6.47a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm0 11.06 5-5-1.06-1.06-5 5 1.06 1.06Zm5-5 5-5-1.06-1.06-5 5 1.06 1.06Zm-1.06 0 5 5 1.06-1.06-5-5-1.06 1.06Zm1.06-1.06-5-5-1.06 1.06 5 5 1.06-1.06Z"
      />
    </Svg>
  );
};
