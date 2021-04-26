import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  console.log("App executed");
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(false);

  const Click = () => {
    setChecked(checked ? false : true);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Họ và tên: </Text>
      <TextInput
        onChangeText={(text) => setName(text)}
        style={styles.nameInput}
        placeholder="Nhập họ và tên"
        keyboardType="numeric"
      ></TextInput>

      <Text style={styles.age}>Tuổi: </Text>
      <NumericInput
        style={styles.ageInput}
        type="plus-minus"
        minValue={0}
        onChange={(value) => console.log(value)}
      />
      <View>
        <Text>{checked ? name : ""}</Text>
      </View>

      <TouchableOpacity onPress={() => Click()}>
        <Text> Ok</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: 60,
    paddingRight: 60,
    marginBottom: 200,
  },
  name: {
    fontWeight: "100",
    fontSize: 24,
    alignSelf: "flex-start",
  },
  nameInput: {
    fontWeight: "100",
    fontSize: 24,
    marginBottom: 10,
  },
  age: {
    fontWeight: "100",
    fontSize: 24,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 10,
  },
});
