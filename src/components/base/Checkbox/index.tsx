import { CheckIcon } from '@/assets/icons/Check';
import { Typography } from '@/components/base/Typography';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useStyles } from './styles';

interface CheckboxIE {
  description: string;
  checked: boolean;
  setChecked: (flag: boolean) => void;
}

export const Checkbox = ({ description, checked, setChecked }: CheckboxIE) => {
  const styles = useStyles();

  const handlePress = () => setChecked(!checked);

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.6}>
      <View style={styles.container}>
        <View style={[styles.box, checked && styles.box_active]}>
          {checked && (
            <CheckIcon
              color={styles.icon.color}
              width={styles.icon.width}
              height={styles.icon.height}
            />
          )}
        </View>
        <Typography style={styles.text}>{description}</Typography>
      </View>
    </TouchableOpacity>
  );
};
