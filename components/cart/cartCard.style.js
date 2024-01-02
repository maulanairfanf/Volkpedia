import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '../../constants/index'

const styles = StyleSheet.create({
  container: {
    width: SIZES.width - 20,
    flex: 1,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.lightWhite,
    padding: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden"
  },
  info: {
    flexDirection: "row"
  },
  image: {
    aspectRatio: 1,
    width: 100,
    resizeMode: 'cover',
    borderRadius: SIZES.small,
  },
  details: {
    paddingLeft: SIZES.small,
    justifyContent: "space-between"
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    color: COLORS.primary,
    width: 200,
  },
  supplier: {
    fontFamily: "regular",
    fontSize: SIZES.medium,
    color: COLORS.gray
  },
  containerPrice: {
    
  },
  price: {
    fontFamily: "regular",
    fontSize: SIZES.medium,
    color: COLORS.gray
  },

})

export default styles
