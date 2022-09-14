import * as React from 'react';
import {useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Settinguser from '../component/settingusert';

function ProfileStackScreen({navigation}) {
  const [setting, Setsetting] = useState(false);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '100%',
        paddingBottom: 20,
        backgroundColor: '#000',
      }}>
      {setting && <Settinguser Setsetting={Setsetting} setting={setting} />}
      <View style={style.projectuse}>
        <Image
          style={{width: 60, height: 60, borderRadius: 40}}
          source={require('../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg')}
        />
        <Text style={style.textname}>Xin Chào Quang Hiệp</Text>
        <Text style={style.textstatus}>23/5/2001</Text>
      </View>
      <View style={style.handledispkay}>
        <ScrollView>
          <TouchableOpacity activeOpacity={0.8} style={style.buttoncolor}>
            <Text style={{color: '#0ef08c'}}>Đảo màu giao diện </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Setsetting(!setting)}
            activeOpacity={0.8}
            style={style.buttoncolor}>
            <Text style={{color: '#0ef08c'}}>Thay đổi thông tin </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={style.account}>
        <Button
          title="Đăng xuất"
          onPress={() => navigation.replace('Đăng nhập')}
        />
        <Button title="Xóa tài khoản" />
      </View>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  projectuse: {
    marginTop: 20,
    marginLeft: 10,
  },
  textname: {
    top: 8,
    position: 'absolute',
    fontSize: 16,
    left: 70,
    color: '#0ef08c',
  },
  textstatus: {
    top: 32,
    position: 'absolute',
    fontSize: 10,
    left: 70,
    color: '#0ef08c',
  },
  handledispkay: {
    height: 460,
    marginTop: 16,
  },
  buttoncolor: {
    backgroundColor: '#161a1f',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 16,
  },
});
export default ProfileStackScreen;
