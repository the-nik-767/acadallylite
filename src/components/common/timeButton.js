import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { icons } from "../../assets";
import {
  color,
  fontSize,
  responsiveHeight,
  responsiveWidth,
} from "../../constant/theme";

const TimeButton = ({ title, onPress, isSelected }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style.buttonContainer,
        {
          backgroundColor: isSelected ? color.green : color.white,
        },
      ]}
    >
      <Image
        style={[
          style.tinyLogowatch,
          { tintColor: isSelected ? color.white : color.black },
        ]}
        source={icons.ic_watch}
      />
      <Text
        style={{
          color: isSelected ? color.white : color.black,
          marginRight: responsiveWidth("5%"),
          marginLeft: responsiveWidth("1%"),
          fontSize: fontSize.mini,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export { TimeButton };

const style = StyleSheet.create({
  buttonContainer: {
    borderRadius: 5,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    // padding: responsiveWidth("2%"),
    marginTop: responsiveWidth("2%"),
    flexDirection: "row",
  },
  titleStyle: {
    color: color.white,
    fontSize: fontSize.regularx,
  },
  tinyLogowatch: {
    width: responsiveWidth("5%"),
    height: responsiveHeight("5%"),
    marginRight: responsiveWidth("1%"),
    marginLeft: responsiveWidth("6%"),
    resizeMode: "contain",
  },
});
