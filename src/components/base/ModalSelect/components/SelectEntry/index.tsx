import { CheckIcon } from '@/assets/icons/Check';
import { Typography } from '@/components/base/Typography';
import { BUTTON_ACTIVE_OPACITY } from '@/constants/button';
import { TouchableOpacity } from 'react-native';
import { useStyles } from './styles';

interface SelectEntryProps<U, T extends { title: string; value: U }> {
  item: T;
  isSelected: boolean;
  onPress: (value: U) => void;
}

export const SelectEntry = <U, T extends { title: string; value: U }>({
  item,
  isSelected,
  onPress,
}: SelectEntryProps<U, T>) => {
  const handlePress = () => onPress(item.value);
  const styles = useStyles();

  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={BUTTON_ACTIVE_OPACITY}
      onPress={handlePress}>
      <Typography style={[styles.text, isSelected && styles.selected]}>
        {item.title}
      </Typography>
      {isSelected && (
        <CheckIcon
          color={styles.icon.color}
          width={styles.icon.width}
          height={styles.icon.height}
        />
      )}
    </TouchableOpacity>
  );
};
