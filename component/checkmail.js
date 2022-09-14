import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
export default function ValidateEmail() {
  return (
    <View>
      <Text style={style.textcheckmail}>
        Vui lòng nhập đúng định dạng email
      </Text>
    </View>
  );
}
const style = StyleSheet.create({
  textcheckmail: {
    marginLeft: 32,
    color: "red",
  },
});
