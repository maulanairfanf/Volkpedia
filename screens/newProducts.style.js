import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../constants"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SIZES.xxLarge,
    backgroundColor: COLORS.lightWhite
  }, 
  upperRow:{
    marginHorizontal: SIZES.small,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.large,
    top: SIZES.large,
    zIndex: 999,
  },
  heading: {
    fontFamily: "semibold",
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
    marginLeft: 5
  }
})

export default styles