import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";
import { View, StyleSheet } from "react-native";
import App from "./Functions";
import Images from "./Image";


const Screen = () => {
  return (
    <View>
      <Images />
      <App />
    </View>
  );
};

export default Screen;
