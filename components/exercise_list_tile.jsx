import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import ExerciseTimer from "./exercise_timer";

export default function ExerciseListTile({
  exerciseName,
  exerciseImage,
  exerciseDuration,
}) {
  return (
    <View style={styles.container}>
      {/* Image */}
      <View
        style={[
          styles.avatar,
          {
            width: hp(5),
            height: hp(5),
            borderRadius: hp(5) / 2, // Set borderRadius to half of width/height for a perfect circle
            overflow: "hidden",
            borderColor: "#AEC6CF",
            borderWidth: 2,
          },
        ]}
        className="flex justify-center items-center"
      >
        <Image
          source={exerciseImage}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
          }}
        />
      </View>

      {/* Exercise Name */}
      <View style={styles.nameContainer}>
        <Text
          style={styles.exerciseName}
          className="font-semibold tracking-wide text-left text-white"
        >
          {exerciseName}
        </Text>
      </View>

      {/* Exercise Duration Timer */}
      <View>
        <ExerciseTimer exerciseDuration={exerciseDuration} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(2),
  },
  avatar: {
    justifyContent: "center",
    alignItems: "center",
  },
  nameContainer: {
    flex: 1, 
    marginLeft: 10, 
  },
  exerciseName: {
    fontSize: hp(2),
    textAlign: "left",
  },
});
