import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
export default function ValidatePassword() {
  return (
    <View>
      <Text style={style.textcheckmail}>Mật khẩu tối thiếu 8 ký tự</Text>
    </View>
  );
}
const style = StyleSheet.create({
  textcheckmail: {
    marginLeft: 32,
    color: "red",
  },
});
