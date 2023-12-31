import { TouchableOpacity, View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import styles from './productCard.style'
import {Ionicons} from "@expo/vector-icons"
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { rupiah } from '../../utils/currency'
const ProductCard = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", {item})}>
      <View style={styles.container} >
        <View style={styles.imageContainer}>
          <Image 
            source={{uri: item.image }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>{item.name}</Text>
          <Text style={styles.supplier} numberOfLines={1}>{item.location}</Text>
          <Text style={styles.price} numberOfLines={1}>{rupiah(item.price)}</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={32} color={COLORS.primary}/>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCard