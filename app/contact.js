import { View, Text, StyleSheet, Animated } from 'react-native';
import { useEffect, useRef } from 'react';

export default function ContactScreen() {
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [opacityAnim]);

  return (
    <Animated.View style={[styles.container, { opacity: opacityAnim }]}>
      <Text style={styles.title}>Contact</Text>
      <Text style={styles.text}>
        Email: nitinpandey3338@gmail.com{'\n'}
        LinkedIn: linkedin.com/in/rohit{'\n'}
        GitHub: github.com/nitin3338
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
