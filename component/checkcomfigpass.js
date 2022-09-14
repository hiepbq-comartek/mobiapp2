import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
export default function ValidatecomfigPassword() {
  return (
    <View>
      <Text style={style.textcheckmail}>Mật khẩu không khớp</Text>
    </View>
  );
}
const style = StyleSheet.create({
  textcheckmail: {
    marginLeft: 32,
    color: "red",
  },
});
