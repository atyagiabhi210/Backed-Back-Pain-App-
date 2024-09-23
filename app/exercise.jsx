import { AntDesign, FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import * as Speech from "expo-speech";
import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";

export default function Exercise() {
  const { exerciseList } = useLocalSearchParams();
  const parsedExerciseList = JSON.parse(exerciseList);
  const navigation = useNavigation();

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [timer, setTimer] = useState(parsedExerciseList[0].duration);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [warningVisible, setWarningVisible] = useState(false);

  const confettiRef = useRef(null);
  let currentExercise = parsedExerciseList[currentExerciseIndex];

  // Hide the warning when tapped outside
  const handleDismissWarning = () => {
    setWarningVisible(false);
  };

  const speakExerciseName = () => {
    Speech.speak(`Starting ${currentExercise.name}`);
  };

  const speakCountdown = (timeLeft) => {
    Speech.speak(`${timeLeft}`);
  };

  const speakCongratulations = () => {
    Speech.speak("Congratulations! You have completed all the exercises!");
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${currentExerciseIndex + 1} of ${parsedExerciseList.length}`,
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "#1E1E1E",
      },
      headerTintColor: "white",
    });
  }, [navigation, currentExerciseIndex]);

  useEffect(() => {
    let interval = null;
    if (isPlaying && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      if (timer <= 5 && timer > 0) {
        setTimeout(() => {
          speakCountdown(timer);
        }, 0);
      }
    } else if (timer === 0) {
      moveToNextExercise();
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, timer]);

  const storeExerciseSession = async () => {
    try {
      const currentDate = new Date().toISOString();
      const session = {
        exerciseList: parsedExerciseList,
        date: currentDate,
      };
      const history = await AsyncStorage.getItem("exerciseHistory");
      const historyArray = history ? JSON.parse(history) : [];
      historyArray.push(session);
      await AsyncStorage.setItem(
        "exerciseHistory",
        JSON.stringify(historyArray)
      );
    } catch (error) {
      console.log("Error saving session to history:", error);
    }
  };

  const moveToNextExercise = () => {
    if (currentExerciseIndex < parsedExerciseList.length - 1) {
      setCurrentExerciseIndex((prevIndex) => prevIndex + 1);
      setTimer(parsedExerciseList[currentExerciseIndex + 1].duration);
      setIsPlaying(false);
    } else {
      setIsPlaying(false);
      setShowConfetti(true);
      setShowSuccessModal(true);
      storeExerciseSession();
      speakCongratulations(); // Speak congratulations
    }
  };

  const moveToPreviousExercise = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex((prevIndex) => prevIndex - 1);
      setTimer(parsedExerciseList[currentExerciseIndex - 1].duration);
    }
  };

  const handlePlayPause = () => {
    if (!isPlaying) {
      speakExerciseName();
    }
    setIsPlaying(!isPlaying);
  };

  const handleForward = () => {
    if (timer > 0) {
      setWarningVisible(true); 
    } else {
      moveToNextExercise();
    }
  };

  const handleBackward = () => {
    moveToPreviousExercise();
  };

  return (
    <TouchableWithoutFeedback onPress={handleDismissWarning}>
      <View style={styles.container}>
        {showConfetti && (
          <ConfettiCannon
            count={200}
            origin={{ x: 0, y: 0 }}
            fadeOut={true}
            autoStart={true}
            ref={confettiRef}
            onAnimationEnd={() => setShowConfetti(false)}
          />
        )}

        {showSuccessModal && (
          <View style={styles.successContainer}>
            <View style={styles.successCard}>
              <Text style={styles.successText}>Congratulations! 🎉</Text>
              <Text style={styles.successSubtext}>
                You completed all the exercises!
              </Text>
            </View>
          </View>
        )}

        {warningVisible && (
          <View style={styles.warningContainer}>
            <Text style={styles.warningText}>
              You must complete the exercise first!
            </Text>
          </View>
        )}

        <Text style={styles.title}>{`${currentExerciseIndex + 1} of ${
          parsedExerciseList.length
        }`}</Text>

        <View style={styles.imageContainer}>
          <Image source={currentExercise.image} style={styles.image} />
        </View>

        <Text style={styles.exerciseName}>{currentExercise.name}</Text>

        <Text style={styles.timer}>{timer}</Text>

        <View style={styles.controls}>
          <TouchableOpacity style={styles.iconControl} onPress={handleBackward}>
            <AntDesign name="banckward" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconControl}
            onPress={handlePlayPause}
          >
            <FontAwesome
              name={isPlaying ? "pause" : "play"}
              size={25}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconControl} onPress={handleForward}>
            <AntDesign name="forward" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "#AEC6CF",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: 20,
  },
  iconControl: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "#AEC6CF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    resizeMode: "contain",
  },
  exerciseName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  timer: {
    fontSize: 30,
    color: "#F1F1F1",
    marginBottom: 40,
  },
  controls: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  successContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  successCard: {
    backgroundColor: "#2C2C2C",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  successText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
  successSubtext: {
    fontSize: 16,
    color: "#F1F1F1",
  },
  warningContainer: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "rgba(255, 0, 0, 0.8)", // Red background for warning
    padding: 10,
    borderRadius: 5,
    zIndex: 1000,
  },
  warningText: {
    fontSize: 16,
    color: "#fff", // White text color for warning
    fontWeight: "bold",
  },
});
