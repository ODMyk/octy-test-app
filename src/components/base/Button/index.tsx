import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { Typography } from '../Typography';
import { useStyles } from './styles';

interface ButtonProps extends React.PropsWithChildren {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  disabled?: boolean;
}

export const Button = ({ children, style, onPress, disabled }: ButtonProps) => {
  const styles = useStyles();

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      activeOpacity={0.6}
      onPress={onPress}
      disabled={disabled}>
      {typeof children === 'string' ? (
        <Typography style={styles.text}>{children}</Typography>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};
