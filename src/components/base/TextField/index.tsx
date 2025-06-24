import { CrossIcon } from '@/assets/icons/Cross';
import { useRef, useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { Typography } from '../Typography';
import { useStyles } from './styles';

interface TextFieldProps {
  label?: string;
  placeholder?: string;
  clearable?: boolean;
  IconLeft?: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
}

export const TextField = ({
  clearable,
  IconLeft,
  placeholder,
  onValueChange,
  value,
  label,
}: TextFieldProps) => {
  const styles = useStyles();
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const triggerFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <View style={styles.container}>
      {label && <Typography style={styles.label}>{label}</Typography>}
      <Pressable
        style={[styles.inputContainer, isFocused && styles.focused]}
        onPress={triggerFocus}>
        {IconLeft}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={styles.placeholder.color}
          style={styles.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onChangeText={onValueChange}
          value={value}
          ref={inputRef}
        />
        {clearable && value && (
          <Pressable onPress={() => onValueChange?.('')}>
            <CrossIcon
              width={styles.clearIcon.width}
              height={styles.clearIcon.height}
              color={styles.clearIcon.color}
            />
          </Pressable>
        )}
      </Pressable>
    </View>
  );
};
