import { View, TouchableOpacity, TextInput, Image, FlatList, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './search.style'
import { Feather, Ionicons } from "@expo/vector-icons"
import { COLORS, SIZES } from '../constants'
import {api} from '../hooks/axios'
import SearchTile from '../components/products/SearchTile'
import { Search } from '../components/reusable'

const SearchScreens = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (payload) => {
    console.log('payload', payload)
    // if (payload !== '') {
    //   try {
    //     const response = await api.get("/products/search/" + payload)
    //     setSearchResults(response.data)
    //   } catch (error) {
    //     setSearchResults([])
    //   }
    // } else {
    //   setSearchResults([])
    // }
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Search
          handleSearch={handleSearch}
          mode="search"
          placeholder="What are you looking for"
        />
        <TouchableOpacity>
          <Feather name="filter" size={26} style={{marginLeft: SIZES.small}} />
        </TouchableOpacity>
      </View>
      {searchResults.length === 0 ? (
        <View style={{flex: 1}}>
          <Image 
            source={require('../assets/images/Pose23.png')}
            style={styles.searchImage}
          />
        </View>
      ): (
        <ScrollView>
          <FlatList
            scrollEnabled={false}
            data={searchResults}
            renderItem={({item}) => (<SearchTile  item={item} />)}
            style={{marginHorizontal: 12}}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  )
}

export default SearchScreens

