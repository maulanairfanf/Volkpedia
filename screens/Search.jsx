import { View, TouchableOpacity, TextInput, Image, FlatList, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './search.style'
import { Feather, Ionicons } from "@expo/vector-icons"
import { COLORS, SIZES } from '../constants'
import {api} from '../hooks/axios'
import SearchTile from '../components/products/SearchTile'

const Search = () => {
  const [searchKey, setSearchKey] = useState('')
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (searchKey !== '') {
      try {
        const response = await api.get("/products/search/" + searchKey)
        setSearchResults(response.data)
      } catch (error) {
        setSearchResults([])
      }
    } else {
      setSearchResults([])
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="camera" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="What are you looking for"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={() => handleSearch()}>
            <Ionicons name='search' size={SIZES.xLarge} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
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

export default Search

