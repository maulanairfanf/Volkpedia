import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import styles from './newProducts.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from "@expo/vector-icons"
import { COLORS, SIZES } from '../constants'
import ProductList from '../components/products/ProductList'
const NewProducts = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-circle" size={30} color={COLORS.lightWhite}/>
          </TouchableOpacity>
          <Text style={styles.heading} >Products</Text>
        </View>
        <ScrollView>
          <ProductList />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default NewProducts