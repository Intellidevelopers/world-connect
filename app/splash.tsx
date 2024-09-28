import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const splash = () => {
  const navigation = useNavigation();

  // Auto-redirect after 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/Onboarding'); // Replace with your onboarding screen name
    }, 6000); // 3000 milliseconds = 3 seconds

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Illustration Image */}
      <Image 
        source={require('../assets/logos/Logo.png')} 
        style={styles.image} 
        resizeMode="contain" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEFF7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '50%',
    height: '50%',
  },
});

export default splash;
