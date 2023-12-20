import { TouchableOpacity, View, Text, Image } from 'react-native'
import React from 'react'
import styles from './productCard.style'
import {Ionicons} from "@expo/vector-icons"
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'
const ProductCard = () => {
  const navigation = useNavigation();
    // "https://d326fntlu7tb1e.cloudfront.net/uploads/cb2e64a8-ad4c-4d45-b58b-b0c7e11b6bb4-fn1.jpg",
    // "https://d326fntlu7tb1e.cloudfront.net/uploads/b1f6d96d-3297-4270-ba65-657dc2bc0236-fn2.jpg",
    // "https://d326fntlu7tb1e.cloudfront.net/uploads/5d445b91-c01a-4564-8ff8-c27c2b88ea5b-fn7.png"
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.container} >
        <View style={styles.imageContainer}>
          <Image 
            source={{uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/cb2e64a8-ad4c-4d45-b58b-b0c7e11b6bb4-fn1.jpg" }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>Product</Text>
          <Text style={styles.supplier} numberOfLines={1}>asdasd</Text>
          <Text style={styles.price} numberOfLines={1}>Rp. 1231231</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={32} color={COLORS.primary}/>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCard