import { View, Text, StyleSheet, Animated } from 'react-native';
import { useEffect, useRef } from 'react';

export default function AboutScreen() {
  const slideAnim = useRef(new Animated.Value(-300)).current;

  useEffect(() => {
    Animated.spring(slideAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY: slideAnim }] }]}>
      <Text style={styles.title}>About Me</Text>
      <Text style={styles.text}>
        I am a developer who loves creating vibrant and engaging user experiences.
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
