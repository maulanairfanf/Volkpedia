import { createContext, useContext, useEffect, useState } from "react";
import { api } from '../hooks/axios'
import * as SecureStore from 'expo-secure-store';
import { useDispatch } from 'react-redux';
import { userLogin, userLogout } from "../redux/auth/actions"; 
import { addUser } from "../redux/user/actions";

const AuthContext = createContext({})

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync("token")
      if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await getProfile()
        dispatch(
          userLogin(token)
        )
      } else {
         dispatch(
          userLogout()
        )
      }
    }
    loadToken()
  },[])

  const getProfile = async () => {
    try {
      const response = await api.get('/me')
      dispatch(addUser(response.data.data))
      return response.data.data
    } catch (error) {
    }
  }

  const value = {
    getProfile,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}