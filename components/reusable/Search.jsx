import {Keyboard, View,TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './search.style'
import { Feather } from '@expo/vector-icons'

const Search = ({mode, handleSearch}) => {
  const navigation = useNavigation()
  const [query, setQuery] = useState("")
  const [keyboardStatus, setKeyboardStatus] = useState('');

  const handleClickSearch = () => {
    if (mode === "search") handleSearch(query)
  }

  const handleClickRedirect = () => {
    if (mode === "redirect") navigation.navigate("Search")
  }

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });


    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {
    if (!keyboardStatus) handleClickSearch()
  },[keyboardStatus])
  return (
    <View style={styles.searchContainer}>
      {/* <TouchableOpacity onPress={() => handleClickSearch()}> */}
        <Feather 
          name="search" size={20} 
          style={styles.searchIcon} 
       />
      {/* </TouchableOpacity> */}
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          value={query}
          onChangeText={setQuery}
          onPressIn={() => handleClickRedirect()}
          placeholder="What are you looking for"
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
    </View>
  )
}

export default Search