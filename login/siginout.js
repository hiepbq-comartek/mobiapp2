import React, { useReducer } from "react";
import Sigin from "./siginin";
import { useState } from "react";
import ValidateEmail from "../component/checkmail";
import ValidatecomfigPassword from "../component/checkcomfigpass";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import ValidatePassword from "../component/checkpass";
const Siginout = ({ navigation }) => {
  const alert = (text) => {
    return Alert.alert(text);
  };

  const [oncheck, setoncheck] = useState(false);
  const [oncheckpass, setoncheckpass] = useState(false);
  const [oncheckcomfig, setoncheckcomfig] = useState(false);
  const profile = {
    name: "",
    email: "",
    password: "",
    checkpassword: "",
  };
  const Get_name = "get_name";
  const Get_email = "get_email";
  const Get_password = "get_password";
  const Get_checkpassword = "get_checkpassword";

  const setName = (payload) => {
    return {
      type: Get_name,
      payload,
    };
  };
  const setEmail = (payload) => {
    return {
      type: Get_email,
      payload,
    };
  };
  const setPassword = (payload) => {
    return {
      type: Get_password,
      payload,
    };
  };
  const setCheckPassword = (payload) => {
    return {
      type: Get_checkpassword,
      payload,
    };
  };
  const reduce = (state, action) => {
    let newprofile;
    switch (action.type) {
      case Get_name:
        return (newprofile = {
          ...state,
          name: action.payload,
        });
      case Get_email:
        return (newprofile = {
          ...state,
          email: action.payload,
        });
      case Get_password:
        return (newprofile = {
          ...state,
          password: action.payload,
        });
      case Get_checkpassword:
        return (newprofile = {
          ...state,
          checkpassword: action.payload,
        });
      default:
        state;
    }
    return newprofile;
  };
  const [state, dispath] = useReducer(reduce, profile);
  const { name, email, password, checkpassword } = state;
  // Alert.alert(password);
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: 999 }}>
      <View>
        <View style={styles.logo}>
          <Image
            style={{ width: 160, height: 160 }}
            source={require("../accset/img/z3681068714710_a4ea01c851d38352e46f609315e51bc8.jpg")}
          />
          <View>
            <Text style={{ fontSize: 20 }}>hypetech.com</Text>
          </View>
        </View>

        <View style={styles.form}>
          <TextInput
            placeholder="Tên tài khoản"
            style={styles.input}
            onChangeText={(newText) => dispath(setName(newText))}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={(newText) => {
              setoncheck(true);
              const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
              if (reg.test(email) === true) {
                setoncheck(false);
              } else if (newText === "") {
                setoncheck(false);
              } else {
                setoncheck(true);
              }
              dispath(setEmail(newText));
            }}
          />
          {oncheck && <ValidateEmail />}
          <TextInput
            placeholder="Mật khẩu"
            style={styles.input}
            onChangeText={(newText) => {
              setoncheckpass(true);
              const strongRegex = new RegExp(
                "^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$",
                "g"
              );
              const mediumRegex = new RegExp(
                "^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$",
                "g"
              );
              const enoughRegex = new RegExp("(?=.{8,}).*", "g");
              if (newText.length == 0) {
                setoncheckpass(false);
              } else if (false == enoughRegex.test(newText)) {
                setoncheckpass(true);
              } else if (strongRegex.test(newText)) {
                setoncheckpass(false);
              } else if (mediumRegex.test(newText)) {
                setoncheckpass(false);
              } else {
                setoncheckpass(false);
              }

              dispath(setPassword(newText));
            }}
          />
          {oncheckpass && <ValidatePassword />}
          <TextInput
            placeholder="Nhập lại Mật Khẩu"
            style={styles.input}
            onChangeText={(newText) => {
              if (newText === password) {
                setoncheckcomfig(false);
              } else if (newText == "") {
                setoncheckcomfig(false);
              } else {
                {
                  setoncheckcomfig(true);
                }
              }

              dispath(setCheckPassword(newText));
            }}
          />
        </View>
        {oncheckcomfig && <ValidatecomfigPassword />}
        <View style={styles.logo}>
          <TouchableOpacity style={styles.button}>
            <Text>Đăng ký</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logo}>
          <Text>
            Bạn đã có tài khoản
            <TouchableOpacity style={styles.siginout}>
              <Button
                style={styles.siginout}
                title="đăng nhập"
                onPress={() => navigation.navigate("Đăng nhập")}
              />
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 20,
    width: "100%",
    alignContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#ccc",
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
  },
  form: {
    marginTop: 40,
  },
  button: {
    width: 160,
    backgroundColor: "red",
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  siginout: {
    marginTop: -12,
    fontSize: 4,
  },
  textsigin: {
    color: "blue",
  },
});

export default Siginout;
