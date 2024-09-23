import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
const CircularAvatarIcon = ({
  iconSize = 35,
  iconColor = "#fff",
  backgroundColor = "grey",
  iconName,
}) => {
  return (
    <View
      style={[
        styles.avatar,
        {
          width: hp(5),
          height: hp(5),
          borderRadius: iconSize,
          backgroundColor,
        },
      ]}
      className="flex justify-center items-center rounded-full items-center"
    >
      <MaterialIcons
        name={iconName}
        size={iconSize}
        color={iconColor}
        className="justify-center"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CircularAvatarIcon;
