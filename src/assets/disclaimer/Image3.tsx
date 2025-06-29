import React from 'react';
import { Path, Svg, SvgProps } from 'react-native-svg';

export const Image3 = ({
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
        fill={color}
        fillRule="nonzero"
        d="m4.281 4.225 14.495 14.496a.75.75 0 1 1-1.06 1.06l-3.785-3.785H6.693A3.687 3.687 0 0 1 3 12.313a3.687 3.687 0 0 1 3.567-3.68L3.22 5.286a.75.75 0 1 1 1.061-1.061ZM12 4.001c3.169 0 4.966 2.097 5.227 4.63h.08A3.687 3.687 0 0 1 21 12.313a3.686 3.686 0 0 1-2.91 3.6l-1.415-1.415h.577c1.261 0 2.284-1.001 2.284-2.236 0-1.235-1.023-2.237-2.284-2.237h-.69c-.365 0-.684-.28-.684-.637 0-2.285-1.806-3.89-3.877-3.89A3.89 3.89 0 0 0 9.039 6.86L7.93 5.752c.884-1.066 2.25-1.751 4.069-1.751Zm.433 10.497L7.838 9.904a.714.714 0 0 1-.399.121h-.69c-1.261 0-2.284 1.002-2.284 2.237s1.023 2.236 2.284 2.236h5.684Z"
      />
    </Svg>
  );
};
