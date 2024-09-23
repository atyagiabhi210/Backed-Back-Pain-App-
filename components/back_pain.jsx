import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { backPainTypes } from "../data/exercise";

const BackPainCard = ({ item, index }) => {
  const router = useRouter();
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          console.log(item.exercises[0].name);
          router.push({
            pathname: "exercises_list", // Ensure your route is set up correctly
            params: { backPainType: JSON.stringify(item) }, // Pass the exercises as a param
          });
        }}
      >
        {/* Image */}
        <Image source={item.image} resizeMode="cover" style={styles.image} />
        {/* Linear Gradient */}
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
        {/* Text over the gradient */}
        <Text
          style={styles.text}
          className="text-white font-semibold text-center tracking-wide justify-center align-center"
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default function BackPainType() {
  return (
    <View className="mx-4">
      <FlatList
        data={backPainTypes}
        numColumns={2}
        renderItem={({ item }) => (
          <BackPainCard
            item={item}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.container}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 2,
  },
  touchable: {
    width: wp(44),
    height: hp(48),
    borderRadius: 35,
    overflow: "hidden",
    padding: 4,
   
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 35,
   
  },
  gradient: {
    position: "absolute", 
    bottom: 0,
    width: "100%",
    height: hp(15),
  },
  text: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    fontSize: hp(2.3),
  },
});
