import { View, Text, StyleSheet, Animated } from 'react-native';
import { useEffect, useRef } from 'react';

export default function ProjectsScreen() {
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(bounceAnim, {
      toValue: 1,
      friction: 2,
      useNativeDriver: true,
    }).start();
  }, [bounceAnim]);

  return (
    <Animated.View style={[styles.container, { transform: [{ scale: bounceAnim }] }]}>
      <Text style={styles.title}>Projects</Text>
      <Text style={styles.text}>
        - React Native Portfolio App{'\n'}
        - Interactive Web Dashboard{'\n'}
        - Data Analytics with Power BI
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#909090',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Lora-regular',
    color: '#ff5722',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Lora-regular',
    color: '#000',
    textAlign: 'center',
  },
});
