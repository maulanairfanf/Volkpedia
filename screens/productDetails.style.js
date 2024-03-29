import { StyleSheet } from "react-native"
import { COLORS, SIZES } from '../constants/index'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite
  },
  upperRow: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: SIZES.xxLarge,
    width: SIZES.width,
    zIndex: 999
  },
  image:{
    aspectRatio: 1,
    resizeMode: "cover"
  },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
  },
  titleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // width: SIZES.width -44,
    top: 20
  },
  ratingRow: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    // width: SIZES.width - 10,
    top: 5
  },
  rating: {
    top: SIZES.small,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: SIZES.large,
    marginBottom: SIZES.large
  },
  ratingText: {
    color: COLORS.gray,
    fontFamily: "medium",
    // paddingHorizontal: SIZES.xSmall,
    paddingTop: 5
  },
  descriptionWrapper: {
    marginHorizontal: SIZES.large
  },
  description: {
    fontFamily: "medium",
    fontSize: SIZES.medium
  },
  descText:{
    fontFamily: "regular",
    fontSize: SIZES.small,
    textAlign: "justify",
    marginBottom: SIZES.small
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    width: 200,
  },
  price:{
    padding: 2,
    fontFamily: "semibold",
    fontSize: SIZES.medium,
  },
  priceWrapper:{
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    padding: 5,
    borderRadius: SIZES.large,
    marginHorizontal: 10
  },
  cartRow: {
    margin: SIZES.small,
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // width: SIZES.width -44,
    // top: 20
  },
  cartBtn: {
    width: SIZES.width*0.7,
    backgroundColor: COLORS.black,
    padding: SIZES.xSmall - 3,
    borderRadius: SIZES.large,
  },
  cartTitle: {
    fontFamily: "semibold",
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
    marginLeft: 10
  },
  addCart: {
    width: 42,
    height: 42,
    borderRadius: 50,
    // margin: SIZES.small,
    backgroundColor: COLORS.black,
    alignItems: "center",
    justifyContent: "center",
    
  },
  detailProduct: {
    marginBottom: SIZES.small,
    marginHorizontal: 20,
  },
  textDetailProduct: {
    fontSize: SIZES.small,
    fontFamily: "regular"
  }
})

export default styles