import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const Index = () => {
  const router = useRouter();
  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/main.webp")}
      />
      <LinearGradient
        colors={["transparent", "#18181B"]}
        style={{
          width: wp(100),
          height: hp(70),
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8 items-center"
      >
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          className="flex item-center "
        >
          <Text
            style={{ fontSize: hp(3) }}
            className="text-white font-bold tracking-wide"
          >
            Cure your{" "}
            <Text className="text-[#AEC6CF] font-bold tracking-wide">
              Back Pain
            </Text>
          </Text>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
            style={{
              width: wp(80),
              height: hp(7),
            }}
            className="bg-[#AEC6CF] rounded-full flex justify-center items-center"
            onPress={() => router.push("onboarding")}
          >
            <Text
              className="text-white font-bold tracking-wide"
              style={{
                fontSize: hp(2),
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

export default Index;
