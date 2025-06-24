import { Image1 } from '@/assets/disclaimer/Image1';
import { Image2 } from '@/assets/disclaimer/Image2';
import { Image3 } from '@/assets/disclaimer/Image3';
import { Image4 } from '@/assets/disclaimer/Image4';
import { Button } from '@/components/base/Button';
import { Checkbox } from '@/components/base/Checkbox';
import { useMainStore } from '@/stores/main';
import { useTheme } from '@/theme';
import { rem } from '@/theme/rem';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Modal, useWindowDimensions, View } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { SvgProps } from 'react-native-svg';
import { Slide } from './components/Slide';
import { SliderDot } from './components/SliderDot';
import { useStyles } from './styles';

const SLIDE_IMAGE_SIZE = 360;

const SkipCheckBox = () => {
  const { setDisclaimerSkipped, disclaimerSkipped } = useMainStore();

  return (
    <Checkbox
      description="Don't show next time"
      checked={disclaimerSkipped}
      setChecked={setDisclaimerSkipped}
    />
  );
};

const GrowImage = (
  image: ({
    height,
    width,
  }: Pick<SvgProps, 'height' | 'width' | 'color'>) => React.ReactNode,
) => {
  const { Colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {image({
        color: Colors.textPrimary,
        height: SLIDE_IMAGE_SIZE,
        width: SLIDE_IMAGE_SIZE,
      })}
    </View>
  );
};

const slides = [
  {
    title: 'Welcome to Currency Converter!',
    description:
      'Explore global currency exchange rates. This app is an educational project, showcasing mobile development.',
    image: Image1,
  },
  {
    title: 'Rates & Reality',
    description:
      "Rates are from Fixer.io's free tier, calculated via Euro. Not for trading or financial decisions; real-time market rates may differ.",
    image: Image2,
  },
  {
    title: 'Fresh & Offline Data',
    description:
      'Rates update automatically every 5 mins when online. Access previously viewed and favorited rates even without internet.',
    image: Image3,
  },
  {
    title: 'Your Financial Journey',
    description:
      'This app is for educational insight only. Always consult professional advice for critical financial choices.',
    image: Image4,
    additional: <SkipCheckBox />,
  },
];

export const Disclaimer = () => {
  const { disclaimerSkipped } = useMainStore();
  const [isOpened, setIsOpened] = useState(!disclaimerSkipped);
  const close = () => setIsOpened(false);

  const styles = useStyles();
  const { width } = useWindowDimensions();
  const intervalWidth = useMemo(() => width - rem(32), [width]);

  const x = useSharedValue(0);
  const scrollRef = useRef<Animated.ScrollView>(null);

  const onScrollHandler = useAnimatedScrollHandler(event => {
    x.value = event.contentOffset.x;
  });

  const handleNext = useCallback(() => {
    const index = Math.round(x.value / intervalWidth);
    const newX = (index + 1) * intervalWidth;

    if (index < slides.length - 1) {
      scrollRef.current?.scrollTo({
        x: newX,
      });
      return;
    }

    close();
  }, [intervalWidth, x.value]);

  return (
    <Modal visible={isOpened} animationType="fade">
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Animated.View style={styles.container}>
            <Animated.ScrollView
              onScroll={onScrollHandler}
              scrollEventThrottle={1}
              horizontal
              snapToInterval={intervalWidth}
              decelerationRate="fast"
              showsHorizontalScrollIndicator={false}
              bounces={false}
              ref={scrollRef}
              disableIntervalMomentum
              contentContainerStyle={styles.content}>
              {slides.map((slide, index) => (
                <Slide
                  x={x}
                  key={index}
                  title={slide.title}
                  subtitle={slide.description}
                  image={GrowImage(slide.image)}
                  index={index}
                  additional={slide.additional}
                />
              ))}
            </Animated.ScrollView>
            <Animated.View style={styles.indicatorBar}>
              <Animated.View style={styles.dotsContainer}>
                {slides.map((_slide, i) => (
                  <SliderDot key={i} index={i} x={x} />
                ))}
              </Animated.View>
            </Animated.View>
          </Animated.View>
          <Button onPress={handleNext}>Continue</Button>
        </SafeAreaView>
      </SafeAreaProvider>
    </Modal>
  );
};
