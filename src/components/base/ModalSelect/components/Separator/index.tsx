import {View} from 'react-native';
import {useStyles} from './styles';

export const Separator = () => {
  const styles = useStyles();

  return <View style={styles.separator} />;
};
