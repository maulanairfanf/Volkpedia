import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import styles from './signIn.style'

const SignIn = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{alignItems: "center"}}>
          <Image 
            source={require('../assets/images/bk.png')}
            style={styles.image}
            />
          <View style={styles.containerEmail}>
            <Text style={styles.name}>Unlimited Luxurious Furniture</Text>
            
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignIn