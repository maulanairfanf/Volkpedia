import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../constants"

const styles = StyleSheet.create({
  container: {
    // alignItems: "center"
  },
  image:{
    aspectRatio: 1,
    resizeMode: "cover",
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 50,
  },
  name: {
    fontFamily: "bold",
    fontSize: SIZES.medium
  },
  containerEmail: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
    padding: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.gray,
    fontSize: SIZES.xSmall
  },
  email: {
    color: COLORS.gray
  },
  containerMenu: {
    marginHorizontal: SIZES.large,
    marginTop: SIZES.small
  },
  borderMenu: {
    borderBottomWidth: 1,
    borderColor: COLORS.gray2,
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.large,
    paddingVertical: SIZES.small
  },
  nameMenu: {
    marginLeft: SIZES.medium,
    color: COLORS.gray
  }
})

export default styles