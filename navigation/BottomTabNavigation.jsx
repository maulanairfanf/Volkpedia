import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Profile, SearchScreens } from '../screens'
import { Ionicons } from "@expo/vector-icons"
import { COLORS } from "../constants/index"
// import { useIsFocused } from "@react-navigation/native";
import { fetchGetProfile } from '../redux/user/actions'
import { useDispatch } from 'react-redux'

const Tab = createBottomTabNavigator()

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70
  }
}

const BottomTabNavigation = () => {
  const dispatch = useDispatch()
  // const isFocused = useIsFocused();
  useEffect(() => {
    dispatch(
      fetchGetProfile()
      )
      // if(isFocused) {
      // }
  },[])
  return (
    <Tab.Navigator screenOptions={screenOptions} >
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return <Ionicons 
              name={focused ? "home" : "home-outline"}
              size={24}
              color={focused ? COLORS.primary : COLORS.gray2}
            />
          }
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreens}
        options={{
          tabBarIcon: ({focused}) => {
            return <Ionicons 
              name={"search-sharp"}
              size={24}
              color={focused ? COLORS.primary : COLORS.gray2}
            />
          }
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return <Ionicons 
              name={focused ? "person" : "person-outline"}
              size={24}
              color={focused ? COLORS.primary : COLORS.gray2}
            />
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation