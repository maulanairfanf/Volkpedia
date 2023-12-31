import { StyleSheet } from "react-native"
import { COLORS, SIZES } from '../constants/index'

const styles = StyleSheet.create({
  textStyle:{
    fontFamily: "bold",
    fontSize: 40
  },
  appBarWrapper: {
    marginHorizontal: 10,
    marginTop: SIZES.small
  },
  appBar: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "semibold",
    fontSize: SIZES.large,
    marginLeft: SIZES.xSmall
  },
  containerButtonCheckout :{
    marginHorizontal: 20,
    position: "absolute",
    bottom: 10,
    width: SIZES.width -40 ,
  },
  containerDetailCheckout: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10
  },
  textCheckoutInfo: {
    fontFamily: "bold",
    fontSize: SIZES.medium
  },
  buttonCheckout: {
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    alignItems: "center",
    paddingVertical: SIZES.xSmall - 4,
    borderRadius: SIZES.xSmall
  },
  textButton: {
    color: COLORS.lightWhite,
    fontFamily: "bold",
  }
})

export default styles