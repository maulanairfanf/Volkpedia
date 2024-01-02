import { FlatList, View, SafeAreaView, ActivityIndicator } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch'
import { COLORS, SIZES } from '../../constants'
import styles from './productList.style'
import ProductCard from './ProductCard'

const ProductList = () => {
  const {data, isLoading, error, refetch } = useFetch("/product")

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator 
          size={SIZES.xxLarge}
          color={COLORS.primary}
        />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        scrollEnabled={false}
        data={data}
        numColumns={2}
        renderItem={({item}) => (<ProductCard  item={item} />)}
        contentContainerStyle={{ gap: SIZES.small }}
        columnWrapperStyle={{ gap: SIZES.small }}
        />
    </SafeAreaView>
  )
}

export default ProductList