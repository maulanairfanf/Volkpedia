import { TouchableOpacity, Text, View, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.style'
import {  Fontisto } from "@expo/vector-icons"
import { Welcome } from '../components'
import Carousel from '../components/home/Carousel'
import Heading from '../components/home/Heading'
import ProductRow from '../components/products/ProductRow'
import { useNavigation } from '@react-navigation/native'
import { Search } from '../components/reusable'
import { useSelector } from 'react-redux'

const Home = () => {
  const navigation = useNavigation()
  const user = useSelector((state) => state.user)
  const cart = useSelector((state) => state.cart)
  

  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Search mode="redirect" />
          <View style={{ alignItems: "flex-end" }} >
            { user?.data.countCart ?
            <View style={styles.cartCount} >
              <Text style={styles.cartNumber} > {cart?.data?.length} </Text>
            </View> : ''
           }
            <TouchableOpacity onPressIn={() => navigation.navigate("Cart")}>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView >
        <Welcome/>
        <Carousel />
        <Heading />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

