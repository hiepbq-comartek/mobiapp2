import React from "react";
import { useState } from "react";
import ValidateEmail from "../component/checkmail";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
} from "react-native";
import ValidatePassword from "../component/checkpass";
const Sigin = ({ navigation }) => {
  const [phoneormail, setphoneormail] = useState("");
  const [oncheck, setoncheck] = useState(false);
  const [password, setpassword] = useState("");
  const [oncheckpass, setoncheckpass] = useState(false);
  let data = { phoneormail, password };
  return (
    <SafeAreaView style={{backgroundColor:"#fff",height:999}}>
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
            placeholder="Email"
            style={styles.input}
            onChangeText={(newText) => {
              setoncheck(true);
              const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
              if (reg.test(phoneormail) === true) {
                setoncheck(false);
              } else if (newText === "") {
                setoncheck(false);
              } else {
                setoncheck(true);
              }
              setphoneormail(newText);
            }}
            value={phoneormail}
          />
          {oncheck && <ValidateEmail />}
          <TextInput
            placeholder="Mật Khẩu"
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
              setpassword(newText);
            }}
            value={password}
          />
        </View>
        {oncheckpass && <ValidatePassword />}
        <View style={styles.logo}>
          <TouchableOpacity
            onPress={() => navigation.replace("Homes")}
            style={styles.button}
          >
            <Text>Đăng nhập</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.logo}>
          <Text>
            bạn chưa có tài khoản {""}
            <TouchableOpacity
              style={styles.siginout}
              onPress={() => navigation.navigate("Đăng ký")}
            >
              <Text style={styles.textsigin}>Đăng ký</Text>
            </TouchableOpacity>
          </Text>
        </View>

        <View style={styles.logo}>
          <TouchableHighlight
            style={styles.siginout}
            onPress={() => navigation.navigate("Tìm tài khoản")}
          >
            <Text style={styles.textsigin}>Quên Mật Khẩu</Text>
          </TouchableHighlight>
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
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
  },
  form: {
    marginTop: 60,
  },
  button: {
    width: 160,
    backgroundColor: "red",
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
  },
  siginout: {
    marginTop: -3,
  },
  textsigin: {
    color: "blue",
  },
});

export default Sigin;
