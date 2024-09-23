import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {
  formatDistanceToNow,
  isThisMonth,
  isThisYear,
  isToday,
  isYesterday,
} from "date-fns";
import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function HistoryScreen() {
  const [exerciseHistory, setExerciseHistory] = useState([]);

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Exercise History",
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "#1E1E1E",
      },
      headerTintColor: "white",
    });
  }, [navigation]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await AsyncStorage.getItem("exerciseHistory");
        const historyArray = history ? JSON.parse(history) : [];

        // Sort the history by date in descending order
        const sortedHistory = historyArray.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setExerciseHistory(sortedHistory);
      } catch (error) {
        console.log("Error fetching exercise history:", error);
      }
    };

    fetchHistory();
  }, []);

  // Function to format date labels like "Today", "Yesterday", "Last Month", etc.
  const getDateLabel = (dateString) => {
    const date = new Date(dateString);

    if (isToday(date)) {
      return "Today";
    } else if (isYesterday(date)) {
      return "Yesterday";
    } else if (isThisMonth(date)) {
      return "This Month";
    } else if (isThisYear(date)) {
      return "This Year";
    } else {
      return formatDistanceToNow(date) + " ago";
    }
  };

  return (
    <View style={styles.container}>
      {exerciseHistory.length === 0 ? (
        <Text style={styles.noHistoryText}>No history available</Text>
      ) : (
        <FlatList
          data={exerciseHistory}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.historyItem}>
              <Text style={styles.date}>{getDateLabel(item.date)}</Text>

              <FlatList
                data={item.exerciseList}
                keyExtractor={(exercise) => exercise.id.toString()}
                horizontal
                renderItem={({ item: exercise }) => (
                  <View style={styles.exerciseContainer}>
                    <Image source={exercise.image} style={styles.avatar} />
                    <Text style={styles.exerciseName}>{exercise.name}</Text>
                  </View>
                )}
              />
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1E1E1E", // Dark background
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF", // White title
    marginBottom: 10,
  },
  noHistoryText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  historyItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    marginBottom: 20,
  },
  date: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#AEC6CF",
    marginBottom: 10,
  },
  exerciseContainer: {
    alignItems: "center",
    marginRight: 15,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#AEC6CF",
    marginBottom: 5,
  },
  exerciseName: {
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: "center",
  },
});
