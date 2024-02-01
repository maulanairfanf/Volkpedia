import { useEffect, useState } from "react";
import { api } from '../hooks/axios'
import * as SecureStore from 'expo-secure-store';
import { useDispatch } from 'react-redux';
import { userLogin, userLogout } from "../redux/auth/actions"; 
import { fetchGetProfile } from "../redux/user/actions";

const AuthProvider = ({children}) => {
  const dispatch = useDispatch()
  const [isSet, setIsSet] = useState(false)

  useEffect(() => {
    const resInterceptor = (response) => {
      return response;
    };

    const errInterceptor = async (error) => {
      if (error.response.status === 401 || error.response.status === 500) {
        await SecureStore.deleteItemAsync("token")
        api.defaults.headers.common['Authorization'] = ''
        dispatch(
          userLogout()
        )
      }
      return Promise.reject();
    };

    const interceptor = api.interceptors.response.use(
      resInterceptor,
      errInterceptor
    );
    
    setIsSet(true)
    return () => api.interceptors.response.eject(interceptor);
  }, []);

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync("token")
      if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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

  return isSet && children
}

export { AuthProvider };