import {  Text, View, TouchableOpacity, ScrollView, Pressable, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from "@expo/vector-icons"
import styles from './cart.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import ListCart from '../components/cart/ListCart'
import useFetch from '../hooks/useFetch'
import { COLORS, SIZES } from '../constants/index'
import { rupiah } from '../utils/currency'

const Cart = ({navigation}) => {
  const {data, isLoading, error, refetch} = useFetch("/cart")
  const [loadingButton, setIsLoadingButton] = useState(false)
  const [countProduct, setCountProduct] = useState(0)

  const handleUpdate = () => {
    

  }
  useEffect(() => {
    if (data && data.products) {
      setCountProduct(data.products.length)
    }
  },[data])

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
      <ScrollView >
        <ListCart data={data.products} isLoading={isLoading} error={error} refetch={refetch}/>
      </ScrollView>
      <View style={styles.containerButtonCheckout}>
        <Text style={styles.textCheckoutInfo}>Checkout Product  ({countProduct})</Text>
        <View style={styles.containerDetailCheckout} >
          <Text style={{color: COLORS.gray}}>Total</Text>
          <Text style={{fontSize: SIZES.medium}}>{rupiah(data.bill)}</Text>
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

