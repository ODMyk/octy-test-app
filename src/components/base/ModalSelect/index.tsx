import {CrossIcon} from '@/assets/icons/Cross';
import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';
import {BlurView} from 'expo-blur';
import {useCallback, useState} from 'react';
import {Modal, Pressable, TouchableOpacity, View} from 'react-native';
import {Typography} from '../Typography';
import {SelectEntry} from './components/SelectEntry';
import {Separator} from './components/Separator';
import {useStyles} from './styles';

interface ModalSelectProps<U, T extends {title: string; value: U}> {
  label?: string;
  values: T[];
  currentValue?: U;
  onChange: (value?: U) => void;
  clearable?: boolean;
}

export const ModalSelect = <U, T extends {title: string; value: U}>({
  label,
  currentValue,
  values,
  onChange,
  clearable = false,
}: ModalSelectProps<U, T>) => {
  const [isOpened, setIsOpened] = useState(false);
  const open = () => setIsOpened(true);
  const close = useCallback(() => setIsOpened(false), []);
  const styles = useStyles();
  const handleSelect = useCallback(
    (value: U) => {
      onChange(value);
      close();
    },
    [close, onChange],
  );

  const clear = () => onChange(undefined);

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<T>) => (
      <SelectEntry
        item={item}
        isSelected={item.value === currentValue}
        onPress={handleSelect}
      />
    ),
    [currentValue, handleSelect],
  );

  return (
    <>
      <View style={styles.container}>
        {label && <Typography style={styles.label}>{label}</Typography>}
        <TouchableOpacity style={styles.button} onPress={open}>
          <Typography
            style={[styles.value, currentValue && styles.valueActive]}>
            {
              (values.find(v => v.value === currentValue) ?? {title: 'None'})
                .title
            }
          </Typography>
          {clearable && currentValue && (
            <TouchableOpacity onPress={clear}>
              <CrossIcon
                width={styles.icon.width}
                height={styles.icon.height}
                color={styles.icon.color}
              />
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      </View>
      <Modal
        transparent
        animationType="fade"
        visible={isOpened}
        onRequestClose={close}>
        <Pressable onPress={close} style={styles.modal}>
          <BlurView intensity={100} tint="dark" style={styles.modal}>
            <Pressable cancelable={false} style={styles.card}>
              <View style={styles.list}>
                <FlashList
                  data={values}
                  renderItem={renderItem}
                  ItemSeparatorComponent={Separator}
                  estimatedItemSize={57}
                />
              </View>
            </Pressable>
          </BlurView>
        </Pressable>
      </Modal>
    </>
  );
};
