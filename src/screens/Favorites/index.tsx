import { RateEntry } from '@/components/custom/RateEntry';
import { useRates } from '@/hooks/useRates';
import { RateEntry as TRateEntry } from '@/types/rates';
import { FlashList, ListRenderItemInfo } from '@shopify/flash-list';
import { RefreshControl, View } from 'react-native';
import { ListEmpty } from './components/ListEmpty';
import { useStyles } from './styles';

const renderItem = ({ item }: ListRenderItemInfo<TRateEntry>) => (
  <RateEntry item={item} />
);
const keyExtractor = (item: TRateEntry) => `rate.${item.base}-${item.target}`;

export const FavoritesScreen = () => {
  const styles = useStyles();
  const { favoriteRates, isLoading, refetch } = useRates();

  return (
    <View style={styles.container}>
      <FlashList
        bounces={false}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={76}
        renderItem={renderItem}
        data={favoriteRates}
        keyExtractor={keyExtractor}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={refetch}
            tintColor={styles.refreshControl.color}
            colors={[styles.refreshControl.color]}
          />
        }
        ListEmptyComponent={<ListEmpty />}
      />
    </View>
  );
};
