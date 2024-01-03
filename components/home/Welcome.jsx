import { View, Text } from 'react-native'
import React from 'react'
import styles from './welcome.style'
import { COLORS, SIZES } from '../../constants'

const Welcome = () => {

  return (
    <View style={styles.container} > 
      <Text style={styles.welcomeText(COLORS.black, SIZES.xSmall)}>
        Make your home 
      </Text>
      <Text style={styles.welcomeText(COLORS.primary, 0)}>
        Comfortable
      </Text>
    </View>
  )
}

export default Welcome