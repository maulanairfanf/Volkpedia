import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './searchTile.style'
import { rupiah } from '../../utils/currency'
import { useNavigation } from '@react-navigation/native'

const SearchTile = ({item}) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("ProductDetails", {item})}>
        <View style={styles.image}>
          <Image source={{uri: item.image}} style={styles.productImg} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.productTitle} numberOfLines={1}>{item.name}</Text>
          <Text style={styles.supplier}>{item.location}</Text>
          <Text style={styles.supplier}>{rupiah(item.price)}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SearchTile