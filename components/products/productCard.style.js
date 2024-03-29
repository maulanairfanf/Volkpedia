import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '../../constants/index'

const styles = StyleSheet.create({
  container: {
    width: 174,
    height: 240,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary
  },
  imageContainer: {
    flex: 1,
    width: 162,
    margin: SIZES.small/2,
    // marginTop: SIZES.small/2,
    borderRadius: SIZES.small,
    overflow: "hidden",
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover'
  },
  details: {
    padding: SIZES.small
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    height: 30
  },
  supplier: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    color: COLORS.gray
  },
  price: {
    fontFamily: "bold",
    fontSize: SIZES.small,
  },
  addBtn: {
    position: "absolute",
    bottom: SIZES.xSmall,
    right: SIZES.xSmall
  }
})

export default styles
