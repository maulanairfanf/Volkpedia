import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './profile.style'
import {MaterialIcons, Ionicons} from "@expo/vector-icons"
import { COLORS } from '../constants'

const Profile = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{alignItems: "center"}}>
          <Image 
            source={{uri: "https://th.bing.com/th/id/OIP.zP1mlHnV1bpgODW8gvQSFQHaIP?rs=1&pid=ImgDetMain" }}
            style={styles.image}
            />
          <Text style={styles.name}>Maulana Irfan Firdian</Text>
          <View style={styles.containerEmail}>
            <Text style={styles.email}>maulanairfanf@gmail.com</Text>
          </View>
        </View>
        <View style={styles.containerMenu}>
          <View style={styles.borderMenu}>
            <TouchableOpacity  style={styles.menu}>
              <Ionicons name="heart-outline" size={24} color={COLORS.gray}/>
              <Text style={styles.nameMenu}>
                Like
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.borderMenu}>
            <TouchableOpacity style={[styles.menu, {color: COLORS.red}]}>
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

