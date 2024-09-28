import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, Feather, FontAwesome6, Fontisto, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';


const SelectInterestScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => router.back()}>
          <AntDesign name='left' size={25} />
      </TouchableOpacity>
      {/* Title */}
      <Text style={styles.title}>Select your Interest</Text>
      <Text style={styles.subtitle}>
        Select a few of your interests to match with users who have similar things in common.
      </Text>

      {/* Interest Buttons */}
      <View style={styles.interestContainer}>
        <TouchableOpacity style={[styles.interestButton, styles.selected]}>
          <Ionicons name='videocam-outline' color={'#fff'} size={20}/>
          <Text style={[styles.interestText, styles.selectedText]}>Movie</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.interestButton}>
          <Ionicons name='book' color={'#000'} size={20}/>
          <Text style={styles.interestText}>Books Reading</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.interestButton}>
          <FontAwesome6 name='person-swimming' color={'#000'} size={20}/>
          <Text style={styles.interestText}>Swimming</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.interestButton}>
          <AntDesign name='antdesign' color={'#000'} size={20}/>
          <Text style={styles.interestText}>Design</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.interestButton}>
          <Fontisto name='photograph' color={'#000'} size={20}/>
          <Text style={styles.interestText}>Photography</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.interestButton}>
          <Feather name='music' color={'#000'} size={20}/>
          <Text style={styles.interestText}>Music</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.interestButton, styles.selected]}>
          <Ionicons name='videocam-outline' color={'#fff'} size={20}/>
          <Text style={[styles.interestText, styles.selectedText]}>Shopping</Text>
        </TouchableOpacity>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={() => router.push('/EmailRegistration')}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
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
  },
  interestContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 30,
    gap: 10
  },
  interestButton: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#EEE',
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 5
  },
  selected: {
    backgroundColor: '#E03368',
    borderColor: '#FF6A9F',
  },
  interestText: {
    color: '#666',
  },
  continueButton: {
    backgroundColor: '#E03368',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  continueButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedText:{
    color: "#fff"
  },
  header:{
    marginTop: 40
  }
});

export default SelectInterestScreen;
