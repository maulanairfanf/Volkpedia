import { TouchableOpacity, View, Text, Image, Pressable, ToastAndroid } from 'react-native'
import React, { useEffect } from 'react'
import styles from './cartCard.style'
import {Ionicons} from "@expo/vector-icons"
import { COLORS } from '../../constants'
import { rupiah } from '../../utils/currency'
import { api } from '../../hooks/axios'
const CartCard = ({item, refetch}) => {
  async function deleteOneCart () {
    try {
      const response = await api.delete("/cart/" + item.productId._id)
      refetch()
      if (response) ToastAndroid.show('Succes Remove Product', ToastAndroid.SHORT);
    } catch (error) {
      if (error) ToastAndroid.show('Failed Remove Product', ToastAndroid.SHORT);
      console.log('error', error)
    }
  }
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
      <Pressable onPress={() => deleteOneCart()} style={styles.trashButton}>
        <Ionicons name="trash-outline" size={32} color={COLORS.red}/>
      </Pressable>
    </View>
  )
}

export default CartCard