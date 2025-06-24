import { useTheme } from '@/theme';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const { Colors, rem } = useTheme();
  return StyleSheet.create({
    container: {
      gap: rem(2),
    },
    label: {
      fontSize: rem(14),
      paddingLeft: rem(4),
      color: Colors.textSecondary,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: rem(8),
      paddingVertical: rem(4),
      paddingHorizontal: rem(12),
      borderWidth: rem(1),
      borderColor: Colors.border,
      borderRadius: rem(10),
      backgroundColor: Colors.card,
    },
    input: {
      color: Colors.textPrimary,
      flex: 1,
    },
    placeholder: {
      color: Colors.placeholder,
    },
    focused: {
      borderColor: Colors.accent,
    },
    clearIcon: {
      height: rem(24),
      width: rem(24),
      color: Colors.textPrimary,
    },
  });
};
