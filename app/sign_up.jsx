import { useNavigation } from "@react-navigation/native";
import { doc, setDoc } from "firebase/firestore"; 
import React, { useState } from "react";
import { firestore } from "../firebase"; 

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { auth, createUserWithEmailAndPassword } from "../firebase";

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    console.log("Sign Up:", { name, email, password });
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      console.log("Registered with:", user.email);

      
      const userDocRef = doc(firestore, "users", user.uid); // Create a reference to the user document
      await setDoc(userDocRef, {
        name: name,
        email: email,
      });

      navigation.navigate("home");
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#AEC6CF"
          value={name}
          onChangeText={setName}
        />
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

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          Already have an account?{" "}
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate("login")}
          >
            Log In
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
