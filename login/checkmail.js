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
import ValidateEmail from "../component/checkmail";

const Resetemail = ({ navigation }) => {
  const [oncheck, setoncheck] = useState(false);
  const [code, setcode] = useState("");
  const [password, setPassword] = useState("");
  const [checkpassword, setCheckPassword] = useState("");
  // if (password === checkpassword) {
  //   return password;
  // } else
  //   <View>
  //     <Text>Mật khẩu không khớp</Text>
  //   </View>;
  // const data = { code, password, checkpassword };
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
            <Text style={styles.textressetpass}>Nhập email</Text>
          </View>
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={(newText) => {
              setoncheck(true);
              const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
              if (reg.test(code) === true) {
                setoncheck(false);
              } else if (newText === "") {
                setoncheck(false);
              } else {
                setoncheck(true);
              }
              setcode(newText);
            }}
          />
        </View>
        {oncheck && <ValidateEmail />}
        <View style={styles.logo}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Quên mật khẩu")}
          >
            <Text>Tìm tài khoản</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logo}>
          <Text>
            đăng nhập tài khoản khác {""}
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

export default Resetemail;
