import { COLORS, SIZES } from "../../constants"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30
  },
  loading: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SIZES.medium
  },
  footerText: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SIZES.medium
  }
})

export default styles