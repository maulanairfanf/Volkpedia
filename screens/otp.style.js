import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../constants"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center"
  },
  containerBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: (digit)  => ({
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: digit ? COLORS.secondary : COLORS.lightWhite,
    width: SIZES.xxLarge,
    height:  SIZES.xxLarge,
    margin: SIZES.small,
    textAlign: 'center',
    fontSize: SIZES.large,
    borderRadius: SIZES.small
  }),
  button: {
    backgroundColor: COLORS.primary,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: SIZES.xSmall,
    justifyContent: "center",
    padding: SIZES.small,
    marginTop: SIZES.large
  }, 
  textButton: {
    color: COLORS.lightWhite,
    fontFamily: "bold",
  }
});

export default styles