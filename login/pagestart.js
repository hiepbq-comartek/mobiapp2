import React, { useReducer } from "react";
import { SafeAreaView, StyleSheet, Image, Alert } from "react-native";
import Loanding from "../loading/loanding";
const PageStart = ({ navigation }) => {
  const alert = (text) => {
    return Alert.alert(text);
  };
  setTimeout(() => {
    navigation.navigate("Đăng nhập");
  }, 3000);
  return (
    <SafeAreaView style={{backgroundColor:"#fff",height:999}}>
      <Image
        style={{ width: 160, height: 160, marginTop: 240, marginLeft: 108 }}
        source={require("../accset/img/z3681068714710_a4ea01c851d38352e46f609315e51bc8.jpg")}
      />
      <Loanding  />
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({});

export default PageStart;
