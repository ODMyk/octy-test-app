import { Typography } from '@/components/base/Typography';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View } from 'react-native';
import { useStyles } from './styles';

export const TabBar = ({
  descriptors,
  state,
  navigation,
}: Pick<BottomTabBarProps, 'state' | 'descriptors' | 'navigation'>) => {
  const routes = Object.values(descriptors);
  const styles = useStyles();

  return (
    <View style={styles.container}>
      {routes.map(({ route, options }, index) => {
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            style={[styles.button, isFocused && styles.active]}>
            {options.tabBarIcon &&
              options.tabBarIcon({
                focused: isFocused,
                color: isFocused ? styles.textActive.color : styles.label.color,
                size: 24,
              })}
            {typeof label === 'string' && (
              <Typography
                style={[styles.label, isFocused && styles.textActive]}>
                {label}
              </Typography>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
