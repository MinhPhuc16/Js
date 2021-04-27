import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
  const [count, setCount] = useState(0);
  const Click = () => {
    setChecked(checked ? false : true);
  };
  const ageUp = () => {
    setCount((Count) => Count + 1);
  };
  const ageDown = () => {
    setCount((Count) => Count - 1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Họ và tên: </Text>
      <TextInput
        onChangeText={(text) => setName(text)}
        style={styles.nameInput}
        placeholder="Nhập họ và tên"
      ></TextInput>

      <Text style={styles.age}>Tuổi: </Text>

      <View
        style={{
          marginTop: 50,
          width: 50,
          height: 50,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity style={styles.click} onPress={ageDown}>
          <Text style={styles.text}> - </Text>
        </TouchableOpacity>

        <Text style={styles.counts}>{count}</Text>

        <TouchableOpacity style={styles.click} onPress={ageUp}>
          <Text style={styles.text}> + </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>{checked ? name + " is " + count : "Bạn chưa nhập tên"}</Text>
      </View>

      <TouchableOpacity onPress={Click}>
      <Text>Ok</Text>
        
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    
  },
  age: {
    fontWeight: "100",
    fontSize: 24,
    marginTop: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  counts: {
    fontSize: 25,
  },
  click: {
    fontSize: 2,
    padding: 10,
  },
  text: {
    fontSize: 20,
  }
});
