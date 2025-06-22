import {useTheme} from '@/theme';
import {rem} from '@/theme/rem';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {Colors} = useTheme();

  return StyleSheet.create({
    separator: {
      height: rem(1),
      backgroundColor: Colors.border,
      width: '100%',
    },
  });
};
