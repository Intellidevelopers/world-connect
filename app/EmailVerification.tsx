import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import Toast from 'react-native-toast-message';

const EmailVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpInputs = useRef<TextInput[]>([]);

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < otpInputs.current.length - 1) {
      otpInputs.current[index + 1]?.focus();
    }

    if (text.length === 0 && index > 0) {
      otpInputs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    if (otp.some(input => input === '')) {
      Toast.show({
        type: 'error',
        text1: 'Invalid OTP',
        text2: 'Please enter all 4 digits of the OTP code.',
        position: 'bottom',
      });
      return;
    }

    // Add logic here to verify OTP with the server or backend

    Toast.show({
      type: 'success',
      text1: 'OTP Verified',
      text2: 'You have successfully verified your OTP!',
      position: 'bottom',
    });

    // Proceed to next screen or logic
    router.push('/AddProfile');  // Replace with the next screen's path
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => router.back()}>
        <AntDesign name='left' size={25} />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Enter Verification Code</Text>
      <Text style={styles.subtitle}>We have sent code to your number 0808 888 6823</Text>

      {/* OTP Input */}
      <View style={styles.inputContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            ref={(ref) => otpInputs.current[index] = ref as TextInput}
            style={styles.input}
            maxLength={1}
            keyboardType="number-pad"
            value={value}
            onChangeText={(text) => handleOtpChange(text, index)}
          />
        ))}
      </View>

      <Text style={styles.duration}>
        Resend it <Text style={styles.durationTime}>00:30s</Text>
      </Text>

      {/* Verify Button */}
      <TouchableOpacity style={styles.continueButton} onPress={handleVerify}>
        <Text style={styles.continueButtonText}>Verify</Text>
      </TouchableOpacity>

      {/* Toast Container */}
      <Toast />
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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  input: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
  },
  duration: {
    flexDirection: 'row',
  },
  durationTime: {
    color: '#E03368',
    fontWeight: '600',
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
  header: {
    marginTop: 40,
  },
});

export default EmailVerification;
