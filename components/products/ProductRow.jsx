import { FlatList, View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, SIZES } from '../../constants'
import ProductCard from './ProductCard'
import styles from './productRow.style'
import useFetch from '../../hooks/useFetch'

const ProductRow = () => {
  const {data, isLoading, error} = useFetch()
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}></ActivityIndicator>
      ): error ? (
        <Text> Something went wront </Text>
      ) : (
        <FlatList 
          keyExtractor={(item) => item._id}
          data={data}
          renderItem={({item}) => (
          <ProductCard item={item} />
          )}
          horizontal
          contentContainerStyle={{columnGap: SIZES.small}}
        />
      )}
    </View>
  )
}

export default ProductRow