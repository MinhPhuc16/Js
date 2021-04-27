import React from "react";
import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  Picture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

const Images = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.Picture}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
    </View>
  );
};

export default Images;
