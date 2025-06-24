import { StarIcon } from '@/assets/icons/Star';
import { Typography } from '@/components/base/Typography';
import { BUTTON_ACTIVE_OPACITY, BUTTON_HITSLOPE } from '@/constants/button';
import { MainStackParamList } from '@/navigation';
import { useMainStore } from '@/stores/main';
import { RateEntry as TRateEntry } from '@/types/rates';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { useStyles } from './styles';

interface RateEntryProps {
  item: TRateEntry;
}

export const RateEntry = ({ item }: RateEntryProps) => {
  const styles = useStyles();
  const { favorites, toggleFavorite: toggleFavoriteStore } = useMainStore();
  const { navigate } = useNavigation<NavigationProp<MainStackParamList>>();

  const openDetails = () => {
    navigate('Rate', {
      rate: {
        base: item.base,
        target: item.target,
      },
    });
  };

  const isFavorite = favorites.some(
    favorite => favorite.base === item.base && favorite.target === item.target,
  );
  const toggleFavorite = () => toggleFavoriteStore(item);

  const differenceText =
    item.difference !== undefined && item.percentage !== undefined
      ? item.difference !== 0
        ? `${item.difference} (${Math.abs(item.percentage)}%)`
        : 'Not changed since the last update'
      : 'Not enough data to compare with previous rate';

  return (
    <TouchableOpacity
      activeOpacity={BUTTON_ACTIVE_OPACITY}
      style={styles.container}
      onPress={openDetails}>
      <View style={styles.content}>
        <Typography style={styles.title}>
          {item.base} / {item.target}
        </Typography>
        <Typography style={styles.rate}>{item.rate}</Typography>
        <Typography
          style={[
            styles.difference,
            (item.difference ?? 0) > 0 && styles.differencePositive,
            (item.difference ?? 0) < 0 && styles.differenceNegative,
          ]}>
          {differenceText}
        </Typography>
      </View>
      <TouchableOpacity
        activeOpacity={BUTTON_ACTIVE_OPACITY}
        hitSlop={BUTTON_HITSLOPE}
        onPress={toggleFavorite}>
        <StarIcon
          height={styles.starIcon.height}
          width={styles.starIcon.width}
          color={styles.starIcon.color}
          fill={isFavorite ? styles.starIcon.color : undefined}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
