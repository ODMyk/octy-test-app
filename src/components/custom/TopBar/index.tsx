import { RefreshIcon } from '@/assets/icons/Refresh';
import { Typography } from '@/components/base/Typography';
import { STALE_TIME } from '@/constants/api';
import { BUTTON_ACTIVE_OPACITY, BUTTON_HITSLOPE } from '@/constants/button';
import { INDICATOR_INTERVAL } from '@/constants/timers';
import { useRates } from '@/hooks/useRates';
import { formatDateTime, formatTime } from '@/services/formatters';
import { useEffect, useState } from 'react';
import { AppState, TouchableOpacity, View } from 'react-native';
import { useStyles } from './styles';

export const TopBar = () => {
  const styles = useStyles();
  const [currentTime, setCurrentTime] = useState(new Date());
  const { isError, isLoading, fetchedAt, refetch } = useRates();
  const isDataFresh = (fetchedAt ?? 0) + STALE_TIME > currentTime.getTime();
  const sameDay = fetchedAt
    ? new Date(fetchedAt).toDateString() === new Date().toDateString()
    : false;

  const textTimestamp = sameDay
    ? formatTime(fetchedAt ?? 0)
    : formatDateTime(fetchedAt ?? 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, INDICATOR_INTERVAL);

    return () => clearInterval(interval);
  }, [fetchedAt]);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: string) => {
      if (nextAppState === 'active') {
        setCurrentTime(new Date());
      }
    };

    const sub = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      sub.remove();
    };
  }, []);

  const indicatorStyle = isLoading
    ? styles.loading
    : isError
      ? styles.expired
      : isDataFresh
        ? styles.actual
        : styles.expired;

  const text = isLoading
    ? 'Loading fresh data'
    : isError
      ? `Error fetching data. Displaying data since ${textTimestamp}`
      : `Updated at ${textTimestamp}`;

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={[styles.indicator, indicatorStyle]} />
        <Typography>{text}</Typography>
      </View>
      <TouchableOpacity
        activeOpacity={BUTTON_ACTIVE_OPACITY}
        hitSlop={BUTTON_HITSLOPE}
        style={styles.refetchButton}
        onPress={refetch}>
        <RefreshIcon
          width={styles.refetchIcon.width}
          height={styles.refetchIcon.height}
          color={styles.refetchIcon.color}
        />
      </TouchableOpacity>
    </View>
  );
};
