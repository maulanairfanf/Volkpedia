import { View, Text,  Image, TextInput,  Pressable, ActivityIndicator, Alert, TouchableOpacity } from 'react-native'
import React, { useState} from 'react'
import styles from './signIn.style'
import { Feather } from "@expo/vector-icons"
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { COLORS, SIZES } from '../constants';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../context/AuthContext';
import {BASE_URL} from '@env'

const SignIn = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('maulanairfanf@gmail.com')
  const [password, setPassword] = useState('password')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { authState, onLogin } = useAuth();

  const toggleShowPassword = () => { 
    setShowPassword(!showPassword); 
  };

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  const handleLogin = async () => {
    console.log('true', BASE_URL)
    setIsLoading(true)
    try {
      await onLogin(email,password)
    } catch (error) {
      Alert.alert('Try Again', 'Wrong email or password', [
        {text: 'Try Again', onPress: () => console.log('Try Again')},
      ]);
      setIsLoading(false)
      throw error
    }
    // setIsLoading(false)
  }


  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Image 
          style={styles.image} 
          source={require("../assets/images/bk.png")}
        />
        <Text style={styles.title}>Unlimited Luxurious Furniture {authState.isLoading}</Text>
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
            onPress={() => handleLogin()}
          >
            {isLoading ? 
              <ActivityIndicator size={SIZES.xLarge + 1} color={COLORS.lightWhite} />
              :
             <Text style={styles.textButton}>LOGIN</Text>
            }
          </Pressable>

        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: SIZES.medium }}>
          <Text style={{marginRight: SIZES.xSmall - 6 }}>Don't have an account? 
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text>
              Register
            </Text>
            </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default SignIn