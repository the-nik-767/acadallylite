import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { icons } from "../../assets";
import { color, fontSize, responsiveWidth } from "../../constant/theme";

const Schedule = ({
  timetitle,
  DrName,
  DrTypes,
  titleStyle,
  showBack,
  datetitle,
  activeindex,
  onpresss,
  showCancelButton,
}) => {
  const [bgColor, setBgColor] = useState("grey");

  const handleColor = () => {
    switch (activeindex) {
      case 0:
        setBgColor(color.gray);
        break;
      case 1:
        setBgColor(color.navyblue);
        break;
      case 2:
        setBgColor(color.green);
        break;
      case 3:
        setBgColor(color.red);
        break;
      default:
        setBgColor(color.gray);
        break;
    }
  };

  useEffect(() => {
    handleColor();
  }, []);

  return (
    <TouchableOpacity
      onPress={onpresss}
      style={{
        flexDirection: "row",
        marginTop: responsiveWidth("3%"),
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
      }}
    >
      <View
        style={[
          style.roundviewcontainer,
          {
            backgroundColor: bgColor,
          },
        ]}
      >
        <Text style={style.datetextcontainer}>{datetitle}</Text>
      </View>
      <View
        style={{
          marginLeft: responsiveWidth("3%"),
          flex: 1,
        }}
      >
        <Text
          style={[
            style.middaltextcontainer,
            {
              marginTop: responsiveWidth("3%"),
              fontSize: fontSize.regular,
              fontWeight: "500",
            },
          ]}
        >
          {timetitle}
        </Text>
        <Text style={[style.middaltextcontainer, { fontWeight: "400" }]}>
          {DrName}
        </Text>
        <Text style={[style.middaltextcontainer, { color: color.green }]}>
          {DrTypes}
        </Text>
      </View>
      {showCancelButton ? (
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            height: "25%",
            paddingVertical: widthPercentageToDP(1),
            paddingHorizontal: widthPercentageToDP(2),
            justifyContent: "center",
            alignItems: "center",
            borderRadius: widthPercentageToDP(2),
            margin: widthPercentageToDP(2),
          }}
        >
          <Text style={{ color: "white" }}>Cancel</Text>
        </TouchableOpacity>
      ) : null}
    </TouchableOpacity>
  );
};

export { Schedule };

const style = StyleSheet.create({
  closecontainer: {
    width: responsiveWidth("4%"),
    height: responsiveWidth("4%"),
    marginTop: responsiveWidth("5%"),
    marginRight: responsiveWidth("6%"),
    // tintColor: color.black,
  },
  roundviewcontainer: {
    backgroundColor: color.gray,
    marginVertical: responsiveWidth("3%"),
    alignItems: "center",
    justifyContent: "center",
    height: responsiveWidth("20%"),
    width: responsiveWidth("20%"),
    borderRadius: 40,
    marginLeft: responsiveWidth("3%"),
  },
  datetextcontainer: {
    fontSize: fontSize.mini,
    alignSelf: "center",
    textAlign: "center",
    padding: responsiveWidth("1%"),
    paddingVertical: responsiveWidth("3.5%"),
    color: color.white,
  },
  middaltextcontainer: {
    marginTop: responsiveWidth("0.5%"),
    color: color.black,
    fontSize: fontSize.mini,
  },
});
