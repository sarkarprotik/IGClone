import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainAppComponent from "./Components/MainAppComponent";
import Header from "./Components/MainHeader/MainHeader";
import MainHeader from "./Components/MainHeader/MainHeader";
import InstaCardButtons from "./Components/InstaCard/InstaCardButtons/InstaCardButtons";

export default function App() {
  return <MainAppComponent />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hotpink",
    alignItems: "center",
    justifyContent: "center"
  }
});
