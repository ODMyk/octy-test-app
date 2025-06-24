import { SwapIcon } from '@/assets/icons/Swap';
import { ModalSelect } from '@/components/base/ModalSelect';
import { TextField } from '@/components/base/TextField';
import { Typography } from '@/components/base/Typography';
import { BUTTON_ACTIVE_OPACITY } from '@/constants/button';
import { rateVariants } from '@/constants/rates';
import { useRates } from '@/hooks/useRates';
import { useMainStore } from '@/stores/main';
import { Rate } from '@/types/rates';
import { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';
import { useStyles } from './styles';

export const CalculatorScreen = () => {
  const styles = useStyles();
  const { selectedBaseCurrency } = useMainStore();
  const { euroRates } = useRates();
  const [base, setBase] = useState(selectedBaseCurrency);
  const [target, setTarget] = useState(Rate.USD);
  const [amount, setAmount] = useState('1');

  const onAmountChange = (value: string) => {
    const number = Number(value);
    if (isNaN(number) || number < 0) return;
    setAmount(value);
  };

  const onBaseChange = (value?: Rate) => {
    if (!value) return;
    setBase(value);
  };

  const onTargetChange = (value?: Rate) => {
    if (!value) return;
    setTarget(value);
  };

  const swap = () => {
    setBase(target);
    setTarget(base);
  };

  if (!euroRates) {
    return (
      <View style={styles.errorContainer}>
        <Typography style={styles.errorText}>
          Unable to fetch any data{'\n'}Calculator is not availbale
        </Typography>
      </View>
    );
  }

  const number = isNaN(Number(amount)) ? 0 : Number(amount);
  const targetAmount = (number * euroRates[target]) / euroRates[base];
  const resultText = `${amount || 0} ${base} = ${targetAmount} ${target}`;

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.flex}>
              <ModalSelect
                label="From"
                values={rateVariants}
                onChange={onBaseChange}
                currentValue={base}
              />
            </View>
            <TouchableOpacity
              activeOpacity={BUTTON_ACTIVE_OPACITY}
              onPress={swap}
              style={styles.swapButton}>
              <SwapIcon
                height={styles.swapIcon.height}
                width={styles.swapIcon.width}
                color={styles.swapIcon.color}
                rotation={90}
              />
            </TouchableOpacity>
            <View style={styles.flex}>
              <ModalSelect
                label="To"
                values={rateVariants}
                onChange={onTargetChange}
                currentValue={target}
              />
            </View>
          </View>
          <TextField
            label="Amount"
            placeholder="12.34"
            value={amount}
            onValueChange={onAmountChange}
          />
          <Typography style={styles.resultText}>{resultText}</Typography>
        </View>
      </KeyboardAvoidingView>
    </Pressable>
  );
};
