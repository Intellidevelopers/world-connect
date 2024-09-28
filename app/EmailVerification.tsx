import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { AntDesign, Feather, FontAwesome6, Fontisto, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';


const EmailVerification = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => router.back()}>
          <AntDesign name='left' size={25} />
      </TouchableOpacity>
      {/* Title */}
      <Text style={styles.title}>Enter Verification Code</Text>
      <Text style={styles.subtitle}>
        We have sent code to your number 0808 888 6823
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
        />
         <TextInput
            style={styles.input}
        />
         <TextInput
            style={styles.input}
        />
         <TextInput
            style={styles.input}
        />
      </View>
      <Text style={styles.duration}>Resend it <Text style={styles.durationTime}>00:30s</Text></Text>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
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
    fontWeight: '500',
  },
  selectedText:{
    color: "#fff"
  },
  header:{
    marginTop: 40
  },
  inputContainer:{
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: "space-between"
  },
  flagDropdown:{
    flexDirection: "row",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#E03368",
    padding: 10
  },
  input:{
    padding: 10,
    flex: 1,
    fontWeight: "600",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 20,
    marginRight: 20,
    borderRadius: 15
  },
  icon:{
    width: 30,
    height: 30,
  },
  duration:{
    flexDirection: "row"
  },
  durationTime:{
    
  }
});

export default EmailVerification;
