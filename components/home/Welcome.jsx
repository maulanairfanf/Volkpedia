import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import styles from './welcome.style'
import { COLORS, SIZES } from '../../constants'
import { Feather, Ionicons } from "@expo/vector-icons"
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
  await SecureStore.setItemAsync("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODdiYWE0MGM5NThjYWUzMDY5MmQ0NyIsImlhdCI6MTcwMzM5NzM4NiwiZXhwIjoxNzA1OTg5Mzg2fQ.yBkiErwOF-yHD8zCfNE_rknWB_JOxZAv2M3agVR6AS4");
}

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync("token");
  if (result) {
    alert("🔐 Here's your value 🔐 \n" + result);
  } else {
    alert('No values stored under that key.');
  }
}

const Welcome = () => {
  const navigation = useNavigation()

  useEffect(() => {
    save()
    getValueFor()
  },[])
  return (
    <View style={styles.container} > 
      <Text style={styles.welcomeText(COLORS.black, SIZES.xSmall)}>
        Find The Most 
      </Text>
      <Text style={styles.welcomeText(COLORS.primary, 0)}>
        Luxurious Furniture
      </Text>

      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onPressIn={() => navigation.navigate("Search")}
            placeholder="What are you looking for"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn} >
            <Ionicons name='camera-outline' size={SIZES.xLarge} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default Welcome