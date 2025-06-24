import { ModalSelect } from '@/components/base/ModalSelect';
import { RateEntry } from '@/components/custom/RateEntry';
import { SearchField } from '@/components/custom/SearchField';
import { rateVariants } from '@/constants/rates';
import { useRates } from '@/hooks/useRates';
import { useMainStore } from '@/stores/main';
import { Rate, RateEntry as TRateEntry } from '@/types/rates';
import { FlashList, ListRenderItemInfo } from '@shopify/flash-list';
import { useMemo, useState } from 'react';
import { RefreshControl, View } from 'react-native';
import { useStyles } from './styles';

const renderItem = ({ item }: ListRenderItemInfo<TRateEntry>) => (
  <RateEntry item={item} />
);
const keyExtractor = (item: TRateEntry) => `rate.${item.base}-${item.target}`;

export const HomeScreen = () => {
  const styles = useStyles();
  const { rates, isLoading, refetch } = useRates();
  const { selectedBaseCurrency, setSelectedBaseCurrency } = useMainStore();
  const [searchText, setSearchText] = useState('');

  const onBaseChange = (value?: Rate) => {
    if (!value) return;
    setSelectedBaseCurrency(value);
  };

  const filteredRates = useMemo(
    () =>
      rates?.filter(rate => {
        if (!searchText) return true;
        return (
          rate.base.toLowerCase().includes(searchText.toLowerCase()) ||
          rate.target.toLowerCase().includes(searchText.toLowerCase())
        );
      }) ?? [],
    [rates, searchText],
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.flex}>
          <SearchField value={searchText} onValueChange={setSearchText} />
        </View>
        <View style={styles.select}>
          <ModalSelect
            currentValue={selectedBaseCurrency}
            values={rateVariants}
            onChange={onBaseChange}
          />
        </View>
      </View>
      <FlashList
        bounces={false}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={76}
        renderItem={renderItem}
        data={filteredRates}
        keyExtractor={keyExtractor}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={refetch}
            tintColor={styles.refreshControl.color}
            colors={[styles.refreshControl.color]}
          />
        }
      />
    </View>
  );
};
