import { FlatList, View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, SIZES } from '../../constants'
import CartCard from './CartCard'
import styles from './listCart.style'

const ListCart = ({data, isLoading, error, fetchData}) => {
  
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
          <CartCard item={item} fetchData={fetchData} />
          )}
          contentContainerStyle={{rowGap: SIZES.small}}
        />
      )}
    </View>
  )
}

export default ListCart