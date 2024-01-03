import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../constants"

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginHorizontal: SIZES.small,
    flexDirection: "row",
    alignItems: "center"
  },
  searchImage: {
    resizeMode: "contain",
    width: SIZES.width - 100,
    height: SIZES.height - 300
  }
})

export default styles