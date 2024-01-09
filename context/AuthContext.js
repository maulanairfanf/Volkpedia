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
    isLoading: true,
  })

  const [userState, setUserState] = useState({})

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY)
      if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await getProfile()
        setAuthState({
          token: token,
          authenticated: true,
          isLoading: false,
        })
      } else {
        setAuthState({
          token: null,
          authenticated: false,
          isLoading: false,
          user: null
        })
        logout()
      }
    }
    loadToken()
  },[])


  const setConfig = async (token) => {

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    
    await SecureStore.setItemAsync(TOKEN_KEY, token)
    setAuthState({
      ...authState,
      token: token,
      authenticated: true,
      isLoading: false
    })
  }

  const getProfile = async () => {
    try {
      const response = await api.get('/me')
      setUserState(response.data.data)
      return response.data.data
    } catch (error) {
    }
  }

  const register = async (email, password, fullName) => {
    try {
      const response = await api.post('/auth/signup', {email, password, fullName})
      return response
    } catch (error) {
      return error
    }
  }

  const login = async (email, password) => {
    try {
      const response = await api.post('/auth/signin', {email, password})
      setConfig(response.data.data.token)
      return response
    } catch (error) {
      console.log('error', error)
      return error
    }
  }

  const logout = async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY)
    api.defaults.headers.common['Authorization'] = ''
    
    setAuthState({
      token: null,
      authenticated: false,
      isLoading: false
    })
  }


  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    getProfile,
    authState,
    userState
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}