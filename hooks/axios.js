import axios from "axios";
import {EXPO_PUBLIC_API_URL} from '@env'


const api = axios.create({
  baseURL: "https://mysterious-pink-frock.cyclic.app/api/v1"
})


export { api }
