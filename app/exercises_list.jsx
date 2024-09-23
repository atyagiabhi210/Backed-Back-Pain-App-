import { useNavigation } from "@react-navigation/native";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import ExerciseListTile from "../components/exercise_list_tile";

export default function Exercises() {
  const navigation = useNavigation();
  const { backPainType } = useLocalSearchParams();
  const parsedBackPainType = JSON.parse(backPainType); 

  // Create state to store the exercise list and duration
  const [exerciseList, setExerciseList] = useState(
    parsedBackPainType.exercises
  );

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: parsedBackPainType.name,
      headerStyle: {
        backgroundColor: "#1E1E1E", 
      },
      headerTintColor: "white", 
    });
  }, [navigation, parsedBackPainType.name]);

 
  const handleDurationChange = (id, newDuration) => {
    const updatedExercises = exerciseList.map((exercise) =>
      exercise.id === id ? { ...exercise, duration: newDuration } : exercise
    );
    setExerciseList(updatedExercises);
  };

  return (
    <SafeAreaView
      style={{
        justifyContent: "space-between",
        flex: 1,
        backgroundColor: "#1E1E1E",
      }}
      className="flex p-2"
    >
      {/* Timing of the schedule and Description */}
      <View className="flex p-4 justify-center align-center">
        <Text
          style={{ fontSize: hp(2) }}
          className="font-semibold tracking-wide text-center mb-2 text-[#AEC6CF]"
        >
          {parsedBackPainType.duration} Minutes
        </Text>
        <Text className="font-semibold tracking-wide text-center text-white">
          {parsedBackPainType.description}
        </Text>
      </View>

      <View
        style={{
          height: 1,
          backgroundColor: "#E0E0E0",
          marginVertical: 10,
        }}
      />

      {/* Render the list of exercises */}
      <FlatList
        data={exerciseList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ExerciseListTile
            exerciseName={item.name}
            exerciseImage={item.image} 
            exerciseDuration={item.duration}
            onDurationChange={(newDuration) =>
              handleDurationChange(item.id, newDuration)
            } 
          />
        )}
      />

      {/* Add A start button */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animated.View entering={FadeInDown.delay(100).stiffness()}>
          <TouchableOpacity
            style={{
              width: wp(30),
              height: hp(7),
            }}
            className="bg-[#AEC6CF] rounded-full flex justify-center items-center"
            onPress={() => {
              router.push({
                pathname: "exercise", 
                params: {
                  exerciseList: JSON.stringify(exerciseList), 
                },
              });
            }}
          >
            <Text
              className="text-white font-bold tracking-wide"
              style={{
                fontSize: hp(2),
              }}
            >
              Start
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}
