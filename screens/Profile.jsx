import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './profile.style'
import {MaterialIcons, Ionicons} from "@expo/vector-icons"
import { COLORS } from '../constants'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../context/AuthContext'
import { useSelector } from 'react-redux'

const Profile = () => {
  const navigation = useNavigation()
  const { onLogout } = useAuth();
  const userState = useSelector((state) => state.user)

  const handleLogout = async () => {
    await onLogout()
    navigation.navigate("SignIn")
  }


  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{alignItems: "center"}}>
          <Image 
            source={{uri: "https://th.bing.com/th/id/OIP.zP1mlHnV1bpgODW8gvQSFQHaIP?rs=1&pid=ImgDetMain" }}
            style={styles.image}
            />
          <Text style={styles.name}>{userState?.fullName}</Text>
          <View style={styles.containerEmail}>
            <Text style={styles.email}>{userState?.email}</Text>
          </View>
        </View>
        <View style={styles.containerMenu}>
          {/* <View style={styles.borderMenu}>
            <TouchableOpacity  style={styles.menu}>
              <Ionicons name="heart-outline" size={24} color={COLORS.gray}/>
              <Text style={styles.nameMenu}>
                Like
              </Text>
            </TouchableOpacity>
          </View> */}
          <View style={styles.borderMenu}>
            <TouchableOpacity style={[styles.menu, {color: COLORS.red}]} onPress={() => handleLogout()}>
              <MaterialIcons name="logout" size={24} color={COLORS.red}/>
              <Text style={[styles.nameMenu, , {color: COLORS.red}]}>
                Logout
              </Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile

