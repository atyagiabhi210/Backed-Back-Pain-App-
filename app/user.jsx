import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; // Add these imports
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { auth, firestore } from "../firebase"; 
export default function UserScreen() {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser; // Get the current user
    if (currentUser) {
      setUser(currentUser); 

      // Fetch user data from Firestore
      const fetchUserData = async () => {
        const userDocRef = doc(firestore, "users", currentUser.uid); // Create a reference to the user document
        const userDoc = await getDoc(userDocRef); 

        if (userDoc.exists()) {
          setUser((prevUser) => ({
            ...prevUser,
            displayName: userDoc.data().name, // Set the name from Firestore
          }));
        } else {
          console.log("No such document!");
        }
      };

      fetchUserData();
    }
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out");
        navigation.navigate("index"); 
      })
      .catch((error) => {
        console.error("Logout error:", error.message);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfo}>
        {user ? (
          <>
            <Text style={styles.title}>User Info</Text>
            <Text style={styles.label}>Name: {user.displayName || "N/A"}</Text>
            <Text style={styles.label}>Email: {user.email}</Text>
          </>
        ) : (
          <Text style={styles.title}>No User Logged In</Text>
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  userInfo: {
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#AEC6CF",
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    color: "#ffffff",
  },
  button: {
    backgroundColor: "#AEC6CF",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
