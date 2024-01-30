import axios from "axios";
import {EXPO_PUBLIC_API_URL} from '@env'


const api = axios.create({
  baseURL: "http://10.0.2.2:9000/api/v1"
  // baseURL: EXPO_PUBLIC_API_URL
})


export { api }
