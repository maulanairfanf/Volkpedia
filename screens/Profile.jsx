import { View, Text, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './profile.style'
import {MaterialIcons} from "@expo/vector-icons"
import { COLORS } from '../constants'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import * as SecureStore from 'expo-secure-store';
import { api } from '../hooks/axios'
import { userLogout } from '../redux/auth/actions'

const Profile = () => {
  const navigation = useNavigation()
  const userState = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleLogout = async () => {
    await SecureStore.deleteItemAsync("token")
    api.defaults.headers.common['Authorization'] = ''
    dispatch(
      userLogout()
    )
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
          <Text style={styles.name}>{userState?.data.fullName}</Text>
          <View style={styles.containerEmail}>
            <Text style={styles.email}>{userState?.data.email}</Text>
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

