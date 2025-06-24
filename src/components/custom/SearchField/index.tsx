import { SearchIcon } from '@/assets/icons/Search';
import { TextField } from '@/components/base/TextField';
import { useStyles } from './styles';

interface SearchFieldProps {
  onValueChange: (value: string) => void;
  value: string;
  placeholder?: string;
}

export const SearchField = ({
  value,
  onValueChange,
  placeholder = 'Search',
}: SearchFieldProps) => {
  const styles = useStyles();
  return (
    <TextField
      placeholder={placeholder}
      value={value}
      onValueChange={onValueChange}
      IconLeft={
        <SearchIcon
          width={styles.icon.width}
          height={styles.icon.height}
          color={styles.icon.color}
        />
      }
      clearable
    />
  );
};
