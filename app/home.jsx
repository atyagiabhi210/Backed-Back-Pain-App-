import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import BackPainType from "../components/back_pain";
import Parallax from "../components/parallax";

const Home = () => {
  const router = useRouter();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Updated Background */}
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />

        {/* Header Section */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Welcome to</Text>
            <Text style={styles.appName}>Backed</Text>
          </View>

          {/* User and History Icons */}
          <View>
            <TouchableOpacity
              style={styles.iconWrapper}
              onPress={() => {
                console.log("User Icon Pressed");
                router.push("user");
              }}
            >
              <AntDesign name="user" size={26} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconWrapper}
              onPress={() => {
                console.log("History Icon Pressed");
                router.push("history");
              }}
            >
              <AntDesign name="hourglass" size={26} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Image Slider without Background */}
        <View style={styles.parallaxWrapper}>
          <Parallax />
        </View>

        {/* Back Pain Question */}
        <View>
          <Text style={styles.questionText}>
            What kind of back pain are you dealing with?
          </Text>
        </View>

        {/* Back Pain Types */}
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BackPainType />
        </GestureHandlerRootView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(2),
  },
  welcomeText: {
    fontSize: hp(2.5),
    fontWeight: "500",
    color: "#F1F1F1",
  },
  appName: {
    fontSize: hp(5),
    fontWeight: "bold",
    color: "#AEC6CF",
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#2C2C2C",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4,
  },
  parallaxWrapper: {
    height: hp(25),
    marginBottom: hp(2),
    borderRadius: 15,
    overflow: "hidden",
  },
  questionText: {
    fontSize: hp(2.5),
    fontWeight: "600",
    color: "white",
    marginBottom: hp(1.5),
  },
});
