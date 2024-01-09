import { FlatList, View, SafeAreaView, ActivityIndicator, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, SIZES } from '../../constants'
import styles from './productList.style'
import ProductCard from './ProductCard'
import { api } from '../../hooks/axios'

const ProductList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [countPage, setCountPage] = useState(0)

  const fetchData = async (index) => {
    setIsLoading(true);
    const params = {
      page: index,
      limit: limit,
    }
    try {
      const response =  await api.get("/product", {params})
      setData([...data,...response.data.data]);
      setCountPage(response.data.pages)
    } catch (error) {
      setError(error);
      setData([])
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(page)
  },[page])

  useEffect(() => {
    console.log('always fetch')
  },[])

    const renderFooter = () => (
      <View style={styles.footerText}>
        {isLoading && <ActivityIndicator />}
        {page === countPage && <Text>No more product at the moment</Text>}
      </View>
    )


  function fetchMoreData () {
    console.log('fetchMoreData')
    if (page < countPage) {
      setPage((prev) => prev + 1)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={data}
        numColumns={2}
        renderItem={({item}) => (<ProductCard  item={item} />)}
        contentContainerStyle={{ gap: SIZES.small }}
        columnWrapperStyle={{ gap: SIZES.small }}
        onEndReached={fetchMoreData}
        onEndReachedThreshold={0.2}
        ListFooterComponent={renderFooter}
        />
    </SafeAreaView>
  )
}

export default ProductList