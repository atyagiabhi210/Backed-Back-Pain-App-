import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { auth } from "../firebase"; // Adjust the import path as needed

export default function LoginScreen() {
  const navigation = useNavigation(); // Initialize navigation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
        navigation.navigate("home");
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Log In</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#AEC6CF"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#AEC6CF"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          Don't have an account?{" "}
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate("sign_up")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    padding: hp(2),
    justifyContent: "center",
  },
  title: {
    fontSize: hp(3),
    fontWeight: "bold",
    color: "#AEC6CF",
    marginBottom: hp(2),
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: hp(3),
  },
  input: {
    backgroundColor: "#2E2E2E",
    borderRadius: 10,
    padding: hp(1.5),
    marginBottom: hp(2),
    color: "white",
    fontSize: hp(2),
  },
  button: {
    backgroundColor: "#AEC6CF",
    borderRadius: 25,
    paddingVertical: hp(2),
    alignItems: "center",
    marginTop: hp(2),
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: hp(2.5),
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(3),
    paddingVertical: hp(1),
  },
  footerText: {
    color: "#AEC6CF",
  },
  linkText: {
    color: "#ffffff",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
