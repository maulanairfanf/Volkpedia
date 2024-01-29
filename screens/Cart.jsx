import {  Text, View, TouchableOpacity, ScrollView, Pressable, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from "@expo/vector-icons"
import styles from './cart.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import ListCart from '../components/cart/ListCart'
import { COLORS, SIZES } from '../constants/index'
import { rupiah } from '../utils/currency'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart } from '../redux/cart/actions'

const Cart = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loadingButton, setIsLoadingButton] = useState(false)
  const [countProduct, setCountProduct] = useState(0)
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  // useEffect(() => {
  //   setIsLoading(true)
  //   try {
  //     dispatch(fetchCart());
  //   } catch (error) {
  //     setError(error)
  //   }
  //   setIsLoading(false)
  // }, []);


  useEffect(() => {
    if (cart && cart.data) {
      setCountProduct(cart.data.length)
    }
  },[cart])

  return (
    <SafeAreaView style={{flex : 1}} >
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <TouchableOpacity onPressIn={() => navigation.goBack()}>
            <Ionicons name="chevron-back-circle" size={30} />
          </TouchableOpacity>
          <Text style={styles.title} >Cart</Text>
        </View>
      </View>
      <ScrollView style={{marginBottom: 150}}>
        <ListCart data={cart.data} isLoading={isLoading} />
      </ScrollView>
      <View style={styles.containerButtonCheckout}>
        <Text style={styles.textCheckoutInfo}>Checkout Product  ({countProduct})</Text>
        <View style={styles.containerDetailCheckout} >
          <Text style={{color: COLORS.gray}}>Total</Text>
          <Text style={{fontSize: SIZES.medium}}>{rupiah(cart.bill)}</Text>
        </View>
        <TouchableOpacity>
          <Pressable
            disabled={loadingButton}
            style={styles.buttonCheckout}
            onPress={() => handleCheckout()}
            >
            {isLoading ? 
              <ActivityIndicator size={SIZES.xLarge + 1} color={COLORS.lightWhite} />
              :
              <Text style={styles.textButton}>Checkout</Text>
            }
          </Pressable>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Cart

