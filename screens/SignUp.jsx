import { View, Text,  Image, TextInput,  Pressable, ActivityIndicator, Alert, TouchableOpacity } from 'react-native'
import React, { useState} from 'react'
import styles from './signIn.style'
import { Feather } from "@expo/vector-icons"
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { COLORS, SIZES } from '../constants';
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../context/AuthContext';

const SignIn = () => {
  const navigation = useNavigation()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { onRegister } = useAuth();

  const toggleShowPassword = () => { 
    setShowPassword(!showPassword); 
  };

  const handleRegister = async () => {
    setIsLoading(true)
    const response = await onRegister(email, password, fullName)
    if (!response.data) {
      Alert.alert('Try Again', 'Email address already use', [
        {text: 'Try Again', onPress: () => console.log('Try Again')},
      ]);

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
             <Text style={styles.textButton}>LOGIN</Text>
            }
          </Pressable>

        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginVertical: SIZES.medium }}>
          <Text style={{marginRight: SIZES.xSmall - 6 }}>Already have an account? 
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text>
              SignUp
            </Text>
            </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default SignIn