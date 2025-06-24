import { TabBar } from '@/components/custom/TabBar';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from './styles';

type LayoutProps = any;

export const TabsLayout = ({ navigation, state, descriptors }: LayoutProps) => {
  const styles = useStyles();
  return (
    <SafeAreaView style={styles.screen} edges={['left', 'right']}>
      <View style={styles.screen}>
        {descriptors[state.routes[state.index].key].render()}
      </View>
      <TabBar navigation={navigation} state={state} descriptors={descriptors} />
    </SafeAreaView>
  );
};
