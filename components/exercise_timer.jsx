import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function ExerciseTimer({ exerciseDuration }) {
  const [timerDuration, setTimerDuration] = useState(exerciseDuration);

  // Function to increase the timer by 5 seconds
  const increaseTimer = () => {
    setTimerDuration((prevDuration) => prevDuration + 5);
  };

  // Function to decrease the timer by 5 seconds
  const decreaseTimer = () => {
    setTimerDuration((prevDuration) =>
      prevDuration - 5 >= 0 ? prevDuration - 5 : 0
    );
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* - Icon */}
      <TouchableOpacity
        style={styles.iconContainer}
        className="flex mr-2"
        onPress={decreaseTimer}
      >
        <View style={styles.circle}>
          <Text style={styles.iconText}>-</Text>
        </View>
      </TouchableOpacity>

      {/* Timer */}
      <Text style={{ fontSize: hp(2), fontWeight: "bold", color: "white" }}>
        {timerDuration} sec
      </Text>

      {/* + Icon */}
      <TouchableOpacity
        style={styles.iconContainer}
        className="flex ml-2"
        onPress={increaseTimer}
      >
        <View style={styles.circle}>
          <Text style={styles.iconText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 30, 
    height: 30, 
    borderRadius: 15, 
    backgroundColor: "#AEC6CF",
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontSize: 18,
    color: "#ffffff", 
    fontWeight: "bold",
    textAlign: "center", 
  },
});
