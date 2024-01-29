import { FlatList, View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, SIZES } from '../../constants'
import ProductCard from './ProductCard'
import styles from './productRow.style'
import { useFetch } from '../../hooks/fetch'

const ProductRow = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await useFetch("get","/product", {limit: 4, page: 1})
      setData(response.data.data);
    } catch (error) {
      setError(error);
      setData([])
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
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