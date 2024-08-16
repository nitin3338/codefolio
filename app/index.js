import { View, Text, StyleSheet, ImageBackground, Animated, ScrollView } from 'react-native';
import { useEffect, useRef } from 'react';

export default function HomeScreen() {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ImageBackground 
          source={require('../assets/images/Nitin.jpeg')}
          style={styles.backgroundImage}
        >
          <View style={styles.overlay} />
          <View style={styles.content}>
            <Text style={styles.title}>Nitin Pandey</Text>
            <Text style={styles.subtitle}>React Native Developer</Text>
            <Text style={styles.bio}>
              Creating interactive mobile apps with a passion for innovation and design.
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollView: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay for the image
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 34,
    fontFamily: 'Lora-Italic',
    
    color: '#ff5722',
    textShadowColor: 'rgba(255, 0, 255, 0.6)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'Lora-regular',
    color: '#00FFFF', // Neon Cyancolor: '#ff5722', // Neon Magenta
    marginTop: 10,
    textShadowColor: 'rgba(0, 255, 255, 0.6)',
    
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  bio: {
    fontSize: 16,
    fontFamily: 'Lora-regular',
    color: '#FFFFFF',
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 5,
  },
});
