import { StyleSheet } from "react-native"
import { COLORS, SIZES } from '../constants/index'

const styles = StyleSheet.create({
  textStyle:{
    fontFamily: "bold",
    fontSize: 40
  },
  appBarWrapper: {
    marginHorizontal: SIZES.small,
    marginTop: SIZES.small
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  cartCount: {
    position: "absolute",
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    zIndex: 999
  },
  cartNumber: {
    fontFamily: "regular",
    fontSize: 10,
    color: COLORS.lightWhite
  },
})

export default styles