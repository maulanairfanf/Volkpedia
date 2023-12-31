import { FlatList, View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, SIZES } from '../../constants'
import CartCard from './CartCard'
import styles from './listCart.style'
// import useFetch from '../../hooks/useFetch'

const ListCart = ({data, isLoading, error}) => {
  // const {data, isLoading, error} = useFetch("/cart")
  
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}></ActivityIndicator>
      ): error ? (
        <Text> Something went wront </Text>
      ) : (
        <FlatList 
          scrollEnabled={false}
          keyExtractor={(item) => item._id}
          data={data}
          renderItem={({item}) => (
          <CartCard item={item} />
          )}
          contentContainerStyle={{rowGap: SIZES.small}}
        />
      )}
    </View>
  )
}

export default ListCart