import { FlatList, View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, SIZES } from '../../constants'
import ProductCard from './ProductCard'
import styles from './productRow.style'
import useFetch from '../../hooks/useFetch'

const ProductRow = () => {
  const {data, isLoading, error} = useFetch()
  // const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState(null);

  // async function FetchData () {
  //   console.log('data')
  //   await axios.get("http://10.0.2.2:3001/api/products")
  //   .then((response) => {
  //     console.log('response', response)
  //   }).catch((error) => {
  //     console.log('error', error)
  //   })
  // }

  // useEffect(() => {
  //  FetchData()
  // },[])
  const products = [1,2,3,4]
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}></ActivityIndicator>
      ): error ? (
        <Text> Something went wront </Text>
      ) : (
        <FlatList 
          data={products}
          renderItem={({item}) => (
          <ProductCard />
          )}
          horizontal
          contentContainerStyle={{columnGap: SIZES.small}}
        />
      )}
    </View>
  )
}

export default ProductRow