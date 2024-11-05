import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import { useRouter } from 'expo-router';

const IdealMatch = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const router = useRouter();

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const isContinueDisabled = selectedOption === null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="left" size={25} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Ideal Match</Text>
      <Text style={styles.subtitle}>What are you hoping to find here on sprout?</Text>

      <View>
        <TouchableOpacity
          style={[
            styles.optionContainer,
            selectedOption === 'Love' && styles.activeOption,
          ]}
          onPress={() => handleOptionSelect('Love')}
        >
          <Image source={require('../assets/icons/love.png')} style={styles.icon} />
          <View>
            <Text style={[styles.optionText, selectedOption === 'Love' && styles.activeText]}>
              Love & Dating
            </Text>
            <Text style={styles.optionSubtitle}>You're not on here to play around</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionContainer,
            selectedOption === 'Friends' && styles.activeOption,
          ]}
          onPress={() => handleOptionSelect('Friends')}
        >
          <Image source={require('../assets/icons/users.png')} style={styles.icon} />
          <View>
            <Text style={[styles.optionText, selectedOption === 'Friends' && styles.activeText]}>
              Friends with Benefits
            </Text>
            <Text style={styles.optionSubtitle}>I want to meet new people</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionContainer,
            selectedOption === 'Business' && styles.activeOption,
          ]}
          onPress={() => handleOptionSelect('Business')}
        >
          <Image source={require('../assets/icons/work.png')} style={styles.icon} />
          <View>
            <Text style={[styles.optionText, selectedOption === 'Business' && styles.activeText]}>
              Sugar Mummy & Daddy
            </Text>
            <Text style={styles.optionSubtitle}>Meet Sugar mummies and daddies in your location</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionContainer,
            selectedOption === 'Hookup' && styles.activeOption,
          ]}
          onPress={() => handleOptionSelect('Hookup')}
        >
          <Image source={require('../assets/icons/work.png')} style={styles.icon} />
          <View>
            <Text style={[styles.optionText, selectedOption === 'Hookup' && styles.activeText]}>
              Hookup
            </Text>
            <Text style={styles.optionSubtitle}>Meet Olosho girls in your area</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          styles.continueButton,
          isContinueDisabled && styles.disabledButton,
        ]}
        disabled={isContinueDisabled}
        onPress={() => {
          if (selectedOption) {
            Toast.show({
              type: 'success',
              text1: `You selected ${selectedOption}`,
            });
            // Navigate to a new screen
            router.push({
              pathname: '/(tabs)', // Update with your screen route
              params: { selectedOption },
            });
          }
        }}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>

      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  header: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginVertical: 10,
    lineHeight: 20,
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  activeOption: {
    backgroundColor: '#ffe6eb',
    borderColor: '#E03368',
    borderWidth: 1,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  optionSubtitle: {
    fontSize: 12,
    color: '#666',
  },
  activeText: {
    color: '#E03368',
    fontWeight: '700',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  continueButton: {
    backgroundColor: '#E03368',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 60,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  continueButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default IdealMatch;
