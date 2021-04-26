import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";
import { View, StyleSheet } from "react-native";
import App from "./Functions";
import Images from "./Image";

const Container = () => {
  return <View style={styles.container}></View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Screen = () => {
  return (
    <Container>
      <Images />
      <App />
    </Container>
  );
};

export default Screen;
