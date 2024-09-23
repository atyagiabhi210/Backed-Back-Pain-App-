import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const onboardingData = [
  {
    title: "Welcome to Backed",
    description:
      "Discover effective exercises and tips to alleviate back pain.",
    image: require("../assets/images/onboarding1.jpg"),
  },
  {
    title: "Track Your Pain",
    description: "Log your workouts and track your progress.",
    image: require("../assets/images/onboarding2.jpg"),
  },
  {
    title: "Get Personalized Plans",
    description: "Receive customized workout plans based on your needs.",
    image: require("../assets/images/onboarding3.jpg"),
  },
];

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push("sign_up");
    }
  };
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={onboardingData[currentIndex].image}
          style={styles.image}
        />
        <Text style={styles.title}>{onboardingData[currentIndex].title}</Text>
        <Text style={styles.description}>
          {onboardingData[currentIndex].description}
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={nextSlide}>
        <Text style={styles.buttonText}>
          {currentIndex === onboardingData.length - 1 ? "Get Started" : "Next"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    padding: hp(2),
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    marginBottom: hp(4),
  },
  image: {
    width: wp(80),
    height: hp(40),
    resizeMode: "contain",
    zIndex: 1,
  },
  title: {
    fontSize: hp(3),
    fontWeight: "bold",
    color: "#AEC6CF",
    marginVertical: hp(1),
  },
  description: {
    fontSize: hp(2),
    color: "#ffffff",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#AEC6CF",
    borderRadius: 25,
    paddingVertical: hp(2),
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: hp(2.5),
  },
});

export default OnboardingScreen;
