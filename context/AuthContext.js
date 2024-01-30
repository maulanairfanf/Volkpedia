import {  useEffect } from "react";
import { api } from '../hooks/axios'
import * as SecureStore from 'expo-secure-store';
import { useDispatch } from 'react-redux';
import { userLogin, userLogout } from "../redux/auth/actions"; 
import { fetchGetProfile } from "../redux/user/actions";

export const AuthProvider = ({children}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync("token")
      if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await getProfile()
        dispatch(
          userLogin(token),
          fetchGetProfile()
        )
      } else {
         dispatch(
          userLogout()
        )
      }
    }
    loadToken()
  },[])

  return (
    <>
      {children}
    </>
  )
}