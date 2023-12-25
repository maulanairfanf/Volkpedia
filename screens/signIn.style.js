import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../constants"

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.small,
    alignItems: 'center'
  },
  image: {
    width: "100%",
    height:500,
    resizeMode: "contain"
  },
  title: {
    fontFamily: "bold",
    color: COLORS.primary,
    fontSize: SIZES.large,
    marginTop: SIZES.small
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: SIZES.small,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.small,
    marginTop: SIZES.large,
    height: 50
  },
  inputIcon: {
    marginHorizontal: 10,
    color: COLORS.gray,
    marginTop: SIZES.small
  },
  inputWrapper:{
    flex: 1, 
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small
  },
  input: {
    fontFamily: "regular",
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.small
  },
  buttonContainer: {
    marginTop: SIZES.medium,
    flex: 1,
    width: SIZES.width,
    paddingHorizontal: SIZES.xLarge,
    marginTop: SIZES.large
  },
  button: {
    backgroundColor: COLORS.primary,
    alignItems: "center",
    paddingVertical: SIZES.xSmall - 4,
    borderRadius: SIZES.xSmall
  },
  textButton: {
    color: COLORS.lightWhite,
    fontFamily: "bold"
  }
})

export default styles