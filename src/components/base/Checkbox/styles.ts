import { useTheme } from '@/theme';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const { Colors, rem } = useTheme();

  return {
    ...StyleSheet.create({
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: rem(8),
        paddingHorizontal: rem(6),
        paddingBottom: rem(16),
      },
      text: {
        fontSize: rem(14),
        color: Colors.textPrimary,
      },
      box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: rem(20),
        height: rem(20),
        borderRadius: rem(4),
        borderWidth: rem(1),
        borderColor: Colors.border,
        backgroundColor: Colors.card,
      },
      box_active: {
        borderColor: Colors.accent,
        backgroundColor: Colors.background,
        borderWidth: 0,
      },
      icon: {
        height: rem(20),
        width: rem(20),
        color: Colors.primary,
      },
    }),
  };
};
