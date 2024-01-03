import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './search.style'
import { Feather, Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../../constants'

const Search = ({mode, handleSearch}) => {
  const navigation = useNavigation()
  const [query, setQuery] = useState()

  const handleClick = () => {
    if (mode === "redirect") {
      navigation.navigate("Search")
    } else {
      handleSearch(query)
    }
  }
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity>
        <Feather name="search" size={20} style={styles.searchIcon} />
      </TouchableOpacity>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          value={query}
          onChangeText={setQuery}
          onPressIn={() => handleClick()}
          placeholder="What are you looking for"
        />
      </View>
    </View>
  )
}

export default Search