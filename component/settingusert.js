import React, { useState, useReducer } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { stylesettinguser } from "./settingusserstyle";
function Settinguser({ Setsetting, setting }) {
  const init = {
    name: "",
    gmail: "",
    phone: "",
    birthday: "",
  };
  const GetName = "Get_Name";
  const GetGmail = "Get_Gmail";
  const GetPhone = "Get_Phone";
  const Getbirth = "Get_Brith";

  const getName = (payload) => {
    return {
      type: GetName,
      payload,
    };
  };
  const getGmail = (payload) => {
    return {
      type: GetGmail,
      payload,
    };
  };
  const getPhone = (payload) => {
    return {
      type: GetPhone,
      payload,
    };
  };
  const getbirth = (payload) => {
    return {
      type: Getbirth,
      payload,
    };
  };
  const reduce = (state, action) => {
    let datapost;
    switch (action.type) {
      case GetName:
        return {
          ...state,
          name: action.payload,
        };
      case GetGmail:
        return {
          ...state,
          gmail: action.payload,
        };
      case GetPhone:
        return {
          ...state,
          phone: action.payload,
        };
      case Getbirth:
        return {
          ...state,
          birthday: action.payload,
        };
    }
    return datapost;
  };
  const [state, dispart] = useReducer(reduce, init);
  const { name, gmail, phone, birthday } = state;
  const handpostuser = (state) => {
    Alert.alert(state);
  };
  return (
    <View style={stylesettinguser.addpostblock}>
      <Text style={stylesettinguser.textaddpost}>Chỉnh sửa thông tin</Text>
      <TouchableOpacity
        style={stylesettinguser.buttonaddpost}
        activeOpacity={0.8}
        onPress={() => Setsetting(!setting)}
      >
        <Text>Xong</Text>
      </TouchableOpacity>
      <View>
        <TextInput
          style={stylesettinguser.inputuser}
          placeholder="Thay đổi tên"
          maxLength={36}
          onChangeText={(newText) => dispart(getName(newText))}
          value={name}
        />
      </View>
      <View>
        <TextInput
          style={stylesettinguser.inputuser}
          placeholder="Gmail"
          maxLength={36}
          onChangeText={(newText) => dispart(getGmail(newText))}
          value={gmail}
        />
      </View>
      <View>
        <TextInput
          style={stylesettinguser.inputuser}
          placeholder="Số điện thoại"
          maxLength={10}
          onChangeText={(newText) => dispart(getPhone(newText))}
          value={phone}
        />
      </View>
      <View>
        <TextInput
          style={stylesettinguser.inputuser}
          placeholder="Ngày/Tháng/Năm"
          maxLength={10}
          onChangeText={(newText) => dispart(getbirth(newText))}
          value={birthday}
        />
      </View>
      <View style={stylesettinguser.handleuser}>
        <TouchableOpacity
          onPress={() => handpostuser(state)}
          activeOpacity={0.8}
        >
          <Text style={stylesettinguser.texthandle}>Thay đổi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Settinguser;
