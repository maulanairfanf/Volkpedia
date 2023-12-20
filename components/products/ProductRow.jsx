import { FlatList, View, Text } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants'
import ProductCard from './ProductCard'
import styles from './productRow.style'

const ProductRow = () => {
  const products = [1,2,3,4]
  return (
    <View style={styles.container}>
      <FlatList 
        data={products}
        renderItem={({item}) => (
        <ProductCard />
        )}
        horizontal
        contentContainerStyle={{columnGap: SIZES.small}}
      />
    </View>
  )
}

export default ProductRow