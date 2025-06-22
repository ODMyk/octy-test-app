import {useTheme} from '@/theme';
import {rem} from '@/theme/rem';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const {Colors} = useTheme();

  return StyleSheet.create({
    container: {
      gap: rem(3),
    },
    button: {
      backgroundColor: Colors.card,
      paddingVertical: rem(12),
      paddingHorizontal: rem(16),
      borderRadius: rem(10),
      alignItems: 'center',
      borderWidth: rem(1),
      borderColor: Colors.border,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    label: {
      paddingLeft: rem(4),
      color: Colors.textSecondary,
      fontSize: rem(14),
    },
    value: {
      fontSize: rem(16),
      color: Colors.textSecondary,
      opacity: 0.8,
      lineHeight: rem(24),
    },
    valueActive: {
      color: Colors.textPrimary,
      opacity: 1,
    },
    modal: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: Colors.card,
      padding: rem(16),
      borderRadius: rem(10),
      width: '80%',
      height: '70%',
    },
    list: {
      flex: 1,
    },
    icon: {
      height: rem(24),
      width: rem(24),
      color: Colors.primary,
    },
  });
};
