import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useRouter } from 'expo-router';

const Onboarding = () => {
  const router = useRouter();

  return (
    <Swiper
      loop={false}
      activeDotColor="#E03368"
      dotColor="#ccc"
      showsButtons={false}
      paginationStyle={{ bottom: 50 }} // Adjust the pagination dots position
    >
      {/* First Slide */}
      <View style={styles.container}>
        <Image 
          source={require('../assets/image1.png')} 
          style={styles.image} 
          resizeMode="contain" 
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Find your partner with us</Text>
          <Text style={styles.subtitle}>
            Amet minim mollit non deserunt sit aliqua dolor do amet sint.
          </Text>
        </View>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.push('/Login')}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Second Slide */}
      <View style={styles.container}>
        <Image 
          source={require('../assets/image1.png')} 
          style={styles.image} 
          resizeMode="contain" 
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Connect with people easily</Text>
          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.push('/Login')}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Third Slide */}
      <View style={styles.container}>
        <Image 
          source={require('../assets/image1.png')} 
          style={styles.image} 
          resizeMode="contain" 
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Start your journey today</Text>
          <Text style={styles.subtitle}>
            Sit aliqua dolor do amet sint. Let's begin your journey with us.
          </Text>
        </View>
        {/* Final Button */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.push('/Login')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEFF7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    padding: 5,
  },
  image: {
    width: '80%',
    height: '50%',
    marginTop: 20,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#E03368',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    width: '90%'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Onboarding;
