import {StyleProp, Text, TextStyle} from 'react-native';
import {useStyles} from './styles';

export interface TypographyProps extends React.PropsWithChildren {
  style?: StyleProp<TextStyle>;
}

export const Typography = ({style, children}: TypographyProps) => {
  const styles = useStyles();

  return <Text style={[styles.text, style]}>{children}</Text>;
};
