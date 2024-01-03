import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, ToastAndroid, ActivityIndicator, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './otp.style';
import { useRoute, useNavigation } from '@react-navigation/native';
import { api } from '../hooks/axios';
import { COLORS, SIZES } from '../constants';
import { useAuth } from '../context/AuthContext';



const OtpInput = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const {item} = route.params;
  const [isLoading, setIsLoading] = useState(false)
  const { onRegister } = useAuth();

  const [otp, setOtp] = useState(['', '', '', '']);
  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < newOtp.length - 1) {
      inputs[index + 1].focus();
    }
    if (!value && index !== 0) {
      inputs[index - 1].focus();
    }
  };
  const inputs = [];

  const handleResendOtp = async () => {
    setIsLoading(true)
    try {
      await onRegister(item.email, item.password, item.fullName)
    } catch (error) {
      ToastAndroid.show('Email already used', ToastAndroid.MEDIUM);
    }
    setIsLoading(false)
  }

  async function SubmitOTP () { 
    setIsLoading(true)
    const params = {
      email: item.email,
      otp: otp.join('')
    }
    try {
      const response = await api.put('/auth/active', params)
      if (response) {
        navigation.navigate('SignIn')
      }
    } catch (error) {
      ToastAndroid.show('Wrong OTP, Try Again', ToastAndroid.LONG);
    }
    setIsLoading(false)
  }

  useEffect(() => {
    if (!item.email) navigation.navigate('SignUp')
    if (!otp.includes('')) {
      SubmitOTP()
    }
  },[otp])

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}></ActivityIndicator>
      ) : (
      <View style={styles.containerBox}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.box(digit)}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(value) => handleOtpChange(value, index)}
            value={digit}
            ref={(input) => {
              inputs[index] = input;
            }}
          />
        ))}
      </View>
      )}
      <Pressable
        disabled={isLoading}
        style={styles.button}
        onPress={() => handleResendOtp()}
      >
        {isLoading ? 
          <ActivityIndicator size={SIZES.xLarge + 1} color={COLORS.lightWhite} />
          :
        <Text style={styles.textButton}>Resend Otp</Text>
        }
      </Pressable>
    </SafeAreaView>
  );
};

export default OtpInput;