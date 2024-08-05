import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import {
  color,
  fontSize,
  responsiveHeight,
  responsiveWidth,
} from "../../constant/theme";

const Loader = ({ isVisible }) => {
  if (isVisible) {
    return (
      <View style={style.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return null;
  }
};

export { Loader };

const style = StyleSheet.create({
  loaderContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.transparentGray,
    position: "absolute",
    //flex:1
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
