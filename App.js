import { StatusBar } from "expo-status-bar";
import React from "react";
import NumericInput from "react-native-numeric-input";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  console.log("App executed");
  return (
    <View style={styles.container}>
      <Image
        style={styles.Logo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      ></Image>
      <Text style={styles.name}>Họ và tên: </Text>
      <TextInput
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

      <StatusBar style="auto" />
    </View>
  );
}
const UserName = (props) => {
  return <nameInput />;
};
const notUserName = (props) => {
  return <h1>Enter your name</h1>;
};
const Name = (props) => {
  const isWritten = props.isWritten;
  if (isWritten) {
    return <UserName />;
  }
  return <notUserName />;
};
const NameButton = (props) => {
  return <button onClick={props.onClick}>Ok</button>;
};

const NonameButton = (props) => {
  return <button onClick={props.onClick}>Ok</button>;
};
class NameControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameClick = this.handleNameClick.bind(this);
    this.handleNonameClick = this.handleNonameClick.bind(this);
    this.state = { isWritten: false };
  }

  handleNameClick() {
    this.setState({ isWritten: true });
  }

  handleNonameClick() {
    this.setState({ isWritten: false });
  }

  render() {
    const isWritten = this.state.isWritten;
    let button;
    if (isWritten) {
      button = <NameButton onClick={this.handleLogoutClick} />;
    } else {
      button = <NonameButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Name isWritten={isWritten} />
        {button}
      </div>
    );
  }
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
  Logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 50,
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
