import { View, Text,  Image, TextInput,  Pressable, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useState} from 'react'
import styles from './signUp.style'
import { Feather } from "@expo/vector-icons"
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { COLORS, SIZES } from '../constants';
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-root-toast';
import { useFetch } from '../hooks/fetch'

const SignIn = () => {
  const navigation = useNavigation()
  const [fullName, setFullName] = useState('Axie Maul Satu')
  const [email, setEmail] = useState('axiemaulsatu@gmail.com')
  const [password, setPassword] = useState('password')

  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const toggleShowPassword = () => { 
    setShowPassword(!showPassword); 
  };

  const handleRegister = async () => {
    setIsLoading(true)
    const item = {
      email: email, 
      password: password,
      fullName: fullName
    }
    try {
      const response = await useFetch('post', '/auth/signup', {email,password, fullName})
      if (response) navigation.navigate('OtpScreen', {item: item})
    } catch (error) {
      Toast.show('Email already used', Toast.MEDIUM);
    }
    setIsLoading(false)
  }


  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Image 
          style={styles.image} 
          source={require("../assets/images/bk.png")}
        />
        <Text style={styles.title}>Sign up and start Shopping</Text>
        <View style={styles.inputContainer}>
          <View>
            <Feather name="user" size={24} style={styles.inputIcon} />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={fullName}
              onChangeText={setFullName}
              placeholder="Full Name"
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View>
            <Feather name="mail" size={24} style={styles.inputIcon} />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter email"
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View>
            <Feather name="lock" size={24} style={styles.inputIcon} />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              secureTextEntry={!showPassword} 
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
            />
          </View>
           <View>
            {/* <TouchableOpacity> */}
              <Feather 
                name={showPassword ? 'eye' : 'eye-off'} 
                size={24} 
                style={styles.inputIcon}
                onPress={toggleShowPassword} 
              />
            {/* </TouchableOpacity> */}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            disabled={isLoading}
            style={styles.button}
            onPress={() => handleRegister()}
          >
            {isLoading ? 
              <ActivityIndicator size={SIZES.xLarge + 1} color={COLORS.lightWhite} />
              :
             <Text style={styles.textButton}>SignUp</Text>
            }
          </Pressable>

        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginVertical: SIZES.medium }}>
          <Text style={{marginRight: SIZES.xSmall - 6 }}>Already have an account? 
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text>
              SignIn
            </Text>
            </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default SignIn