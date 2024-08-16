import { Tabs } from 'expo-router';
import { useState, useEffect, useRef } from 'react';
import { Animated, StyleSheet, View, Image, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
    'Lora-regular': require('../assets/fonts/Lora-regular.ttf'),
    'Lora-Italic': require('../assets/fonts/Lora-Italic.ttf'),
  });

  const [currentRoute, setCurrentRoute] = useState('index');
  const imageTranslateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(imageTranslateY, {
      toValue: currentRoute === 'index' ? 0 : -50, 
      useNativeDriver: true,
    }).start();
  }, [currentRoute]);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.imageContainer, { transform: [{ translateY: imageTranslateY }] }]}>
        <Image source={require('../assets/images/Nitin.jpeg')} style={styles.image} />
      </Animated.View>
      <Tabs
      screenOptions={{
        headerShown: false, // Hide header on all screens initially
        tabBarStyle: {
          position: 'absolute',
          bottom: 10, // Move tab bar up
          left: 10,
          right: 10,
          height: 60,
          borderRadius: 30, // Add border radius
          backgroundColor: 'grey', // Set background color to match the theme
          borderTopWidth: 0, // Remove the default top border
          elevation: 10, // Add shadow for better visibility
        },
        tabBarActiveTintColor: '#00FFFF', // Active tab icon color
        tabBarInactiveTintColor: '#000', // Inactive tab icon color
        tabBarShowLabel: false, // Hide labels for a cleaner look
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
          headerShown: false, // Hide header only on Home screen
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
          headerTitle: 'About Me',
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase-outline" color={color} size={size} />
          ),
          headerTitle: 'Projects',
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="mail-outline" color={color} size={size} />
          ),
          headerTitle: 'Contact',
        }}
      />
    </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  imageContainer: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    height: 150, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
    resizeMode: 'cover',
  },
});
