import { rem } from '@/theme/rem';
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: rem(32),
    },
    flex: {
      flex: 1,
    },
    indicatorBar: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
    dotsContainer: {
      height: 10,
      flexDirection: 'row',
      gap: rem(10),
      alignItems: 'center',
    },
    content: {
      paddingHorizontal: rem(16),
      paddingTop: rem(16),
    },
  });
};
