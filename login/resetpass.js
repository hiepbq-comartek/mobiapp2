import React from "react";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import ValidatePassword from "../component/checkpass";
import ValidatecomfigPassword from "../component/checkcomfigpass";
const Resetpass = ({ navigation }) => {
  const [code, setcode] = useState("");
  const [password, setPassword] = useState("");
  const [checkpassword, setCheckPassword] = useState("");
  const [oncheckpass, setoncheckpass] = useState(false);
  const [oncheckcomfig, setoncheckcomfig] = useState(false);
  const data = { code, password, checkpassword };
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
          <View style={styles.logo}>
            <Text style={styles.textressetpass}>Quên mật khẩu</Text>
          </View>
          <TextInput
            placeholder="Nhập mã code"
            style={styles.input}
            onChangeText={(newText) => setcode(newText)}
          />
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
                setoncheckpass(true);
              } else if (mediumRegex.test(newText)) {
                setoncheckpass(true);
              } else {
                setoncheckpass(false);
              }
              setPassword(newText);
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

              setCheckPassword(newText);
            }}
          />
        </View>
        {oncheckcomfig && <ValidatecomfigPassword />}
        <View style={styles.logo}>
          <TouchableOpacity style={styles.button}>
            <Text>Đổi Mật khẩu</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logo}>
          <Text>
            bạn đã có tài khoản {""}
            <TouchableOpacity
              style={styles.siginout}
              onPress={() => navigation.navigate("Đăng nhập")}
            >
              <Text style={styles.textsigin}>Đăng Nhập</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textressetpass: {
    marginTop: -24,
    fontSize: 24,
    marginBottom: 18,
  },
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
    marginTop: -3,
  },
  textsigin: {
    color: "blue",
  },
});

export default Resetpass;
