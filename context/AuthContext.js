import { createContext, useContext, useEffect, useState } from "react";
import { api } from '../hooks/axios'
import * as SecureStore from 'expo-secure-store';

const AuthContext = createContext({})
const TOKEN_KEY = "token"

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
  const [authState, setAuthState] = useState({
    token: null,
    authenticated: null,
    isLoading: true
  })

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY)
      if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setAuthState({
          token: token,
          authenticated: true,
          isLoading: false
        })
      } 
    }
    loadToken()
  },[])

  const register = async (email, password) => {
    try {
      return await api.post('/users/register', {email,password})
    } catch (error) {
      return error
    }
  }

  const login = async (email, password) => {
    try {
      const response = await api.post('/users/login', {email, password})
      
      api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
      
      await SecureStore.setItemAsync(TOKEN_KEY, response.data.token)
      setAuthState({
        token: response.data.token,
        authenticated: true,
        isLoading: false
      })
      console.log('masuk sini dulu')
      return response
    } catch (error) {
      console.log('error',  error)
      return error
    }
  }

  const logout = async (email, password) => {
  
    await SecureStore.deleteItemAsync(TOKEN_KEY)
    api.defaults.headers.common['Authorization'] = ''
    
    setAuthState({
      token: null,
      authenticated: false
    })
  }


  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}