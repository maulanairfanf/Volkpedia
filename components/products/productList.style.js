import { COLORS, SIZES } from "../../constants"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center"
  },
  container: {
    alignItems: "center",
    paddingTop: SIZES.xxLarge,
    paddingBottom: SIZES.xxLarge
  },
  separator: {
    height: 16
  }
})

export default styles