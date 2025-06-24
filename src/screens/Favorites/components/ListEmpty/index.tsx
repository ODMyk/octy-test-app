import { Typography } from '@/components/base/Typography';
import { View } from 'react-native';
import { useStyles } from './styles';

export const ListEmpty = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Typography style={styles.text}>
        You have no favorite rates yet
      </Typography>
    </View>
  );
};
