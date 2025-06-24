import { ChevronLeftIcon } from '@/assets/icons/ChevronLeft';
import { Button } from '@/components/base/Button';
import { Typography } from '@/components/base/Typography';
import { BUTTON_ACTIVE_OPACITY } from '@/constants/button';
import { checkSuccess, useRatePair } from '@/hooks/useRatePair';
import { MainStackParamList } from '@/navigation';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from './styles';

export const RateDetailsScreen = () => {
  const {
    params: { rate },
  } = useRoute<RouteProp<MainStackParamList, 'Rate'>>();
  const styles = useStyles();
  const { goBack } = useNavigation();

  const data = useRatePair(rate);
  if (!checkSuccess(data)) {
    return null;
  }

  const differenceText =
    data.difference !== undefined && data.percentage !== undefined
      ? data.difference !== 0
        ? `${data.difference} (${Math.abs(data.percentage)}%)`
        : 'Not changed since the last update'
      : 'Not enough data to compare with previous rate';

  const favoriteText = data.isFavorite
    ? 'Remove from favorites'
    : 'Add to favorites';

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.container}>
      <TouchableOpacity
        onPress={goBack}
        style={styles.goBackButton}
        activeOpacity={BUTTON_ACTIVE_OPACITY}>
        <ChevronLeftIcon
          width={styles.goBackIcon.width}
          height={styles.goBackIcon.height}
          color={styles.goBackIcon.color}
        />
        <Typography style={styles.goBackText}>Back</Typography>
      </TouchableOpacity>
      <View style={styles.card}>
        <Typography style={styles.title}>
          {data.base} / {data.target}
        </Typography>
        <Typography style={styles.titleFull}>
          {data.baseTitle} / {data.targetTitle}
        </Typography>
        <Typography style={styles.rate}>{data.rate}</Typography>
        <Typography
          style={[
            styles.difference,
            (data.difference ?? 0) < 0 && styles.differenceNegative,
            (data.difference ?? 0) > 0 && styles.differencePositive,
          ]}>
          {differenceText}
        </Typography>
        <Button onPress={data.toggleFavorite} style={styles.favoritesButton}>
          {favoriteText}
        </Button>
      </View>
    </SafeAreaView>
  );
};
