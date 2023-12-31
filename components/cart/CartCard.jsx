import { TouchableOpacity, View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import styles from './cartCard.style'
import {Ionicons} from "@expo/vector-icons"
import { COLORS } from '../../constants'
import { rupiah } from '../../utils/currency'
const CartCard = ({item}) => {
  return (
    <View style={styles.container} >
      <View style={styles.info}>
        <Image 
          source={{uri: item.productId.image }}
          style={styles.image}
        />
        <View style={styles.details}>
          <Text style={styles.title} >{item.productId.name}</Text>
          <Text style={styles.supplier} >{item.productId.location}</Text>
          <View style={styles.containerPrice} >
          <Text style={styles.price}>
            {rupiah(item.productId.price)} * {item.quantity}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.trashButton}>
        <Ionicons name="trash-outline" size={32} color={COLORS.red}/>
      </TouchableOpacity>
    </View>
  )
}

export default CartCard