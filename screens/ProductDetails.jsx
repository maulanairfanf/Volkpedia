import { View, Text, TouchableOpacity, Image, Pressable, ActivityIndicator } from 'react-native'
import React, {useState} from 'react'
import styles from './productDetails.style'
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons"
import { COLORS, SIZES } from '../constants'
import { useRoute } from '@react-navigation/native'
import { rupiah } from '../utils/currency'
import { api } from "../hooks/axios"
import Toast from 'react-native-root-toast';

const ProductDetails = ({navigation}) => {
  const route = useRoute()
  const {item} = route.params;
  const [isLoading, setIsLoading] = useState(false)

  const [count, setCount] = useState(1)

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const decrement = () => {
    setCount((prevCount) => prevCount - 1)
  }

  async function handleAddToCart ()  {
    setIsLoading(true)
    const params = {
      productId: item._id,
      quantity: count
    }
    try {
      const response = await api.post('/cart', params)
      if (response) Toast.show('Succes Add To Cart', Toast.MEDIUM);
    } catch (error) {
      if (error) Toast.show('Failed Add Product To Cart', Toast.MEDIUM);
      console.log('error', error)
    }
    setIsLoading(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary}/>
        </TouchableOpacity> */}
      </View>
      <Image 
        source={{uri: item.image }}
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>
              {rupiah(item.price)}
            </Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating} >
              <Ionicons
                name="star"
                size={24}
                color="gold"
              />
            <Text style={styles.ratingText}>({item.rating}) |   {item.selling} Selling</Text>
          </View>
          <View style={styles.rating} >
            {item.quantity ? 
              <Text style={{color: COLORS.red}}>
                Stock Empty
              </Text> :
            <>
              <Pressable 
                onPress={() => increment()}
                disabled={count >= item.stock}
              >
                <SimpleLineIcons
                  name="plus"
                  size={20}
                  
                  />
              </Pressable>
              <Text style={[styles.ratingText, {paddingHorizontal: SIZES.xSmall}]}>{count}</Text>
              <Pressable 
                onPress={() => decrement()}
                disabled={count <= 1}
              >
                <SimpleLineIcons
                  name="minus"
                  size={20}
                  />
              </Pressable>
            </>
            }
          </View>
        </View>

        <View style={styles.detailProduct}>
          <Text style={styles.description}>
            Information Product
          </Text>
          <Text style={styles.textDetailProduct}>
            Stock : {item.stock}
          </Text>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>
            Description
          </Text>
          <Text style={styles.descText}>
            {item.description}
          </Text>
        </View>

        <View style={{marginBottom: SIZES.small}} >
          <View style={styles.location} >
            <View style={{ flexDirection: "row"}}>
              <Ionicons
                name="location-outline"
                size={20}
                />
              <Text> {item.location} </Text>
            </View>

            <View style={{ flexDirection: "row"}}>
              <MaterialCommunityIcons
                name="truck-delivery-outline"
                size={20}
                />
              <Text> Free Delivery </Text>
            </View>
          </View>
        </View>
        <View style={styles.cartRow}>
          <Pressable 
            onPress={() => handleAddToCart()} 
            style={[styles.cartBtn]}
            disabled={isLoading}
          >
            {isLoading ? 
              <ActivityIndicator size={SIZES.xLarge + 1} color={COLORS.lightWhite} /> :
              <Text style={styles.cartTitle}> Add To Cart</Text>
            }
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Cart")} style={styles.addCart}>
            <Fontisto name="shopping-bag" size={24} color={COLORS.lightWhite} />
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default ProductDetails