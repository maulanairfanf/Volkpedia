import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './newProducts.style'
import { Ionicons } from "@expo/vector-icons"
import { COLORS, SIZES } from '../constants'
import ProductList from '../components/products/ProductList'
const NewProducts = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} color={COLORS.lightWhite}/>
        </TouchableOpacity>
        <Text style={styles.heading} >Products</Text>
      </View>
      <ProductList />
    </View>
  )
}

export default NewProducts