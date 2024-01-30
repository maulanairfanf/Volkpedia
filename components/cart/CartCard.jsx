import { TouchableOpacity, View, Text, Image, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import styles from './cartCard.style'
import {Ionicons} from "@expo/vector-icons"
import { COLORS } from '../../constants'
import { rupiah } from '../../utils/currency'
import Toast from 'react-native-root-toast';
import { useFetch } from '../../hooks/fetch'
import { fetchCart } from '../../redux/cart/actions'
import { useDispatch } from 'react-redux'
const CartCard = ({item, fetchData}) => {
  const dispatch = useDispatch()
  async function deleteOneCart () {
    try {
      const response = await useFetch("delete", "/cart/" + item.productId._id)
      dispatch(fetchCart());
      if (response) Toast.show('Succes Remove Product', Toast.MEDIUM);
    } catch (error) {
      if (error) Toast.show('Failed Remove Product', Toast.MEDIUM);
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