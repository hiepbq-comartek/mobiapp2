import React, {useReducer} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView,
} from 'react-native';
import {stylelike} from '../style/stylelike';
// import { SimpleLineIcons } from "@expo/vector-icons";
import Reduce from '../reducer/reduce';
import {init} from '../reducer/init';
import {Checkfollow} from '../reducer/output';
import {datas} from '../server/data';
import {dataauthor} from '../server/dataauthor';

function LikeStackScreen() {
  const [state, dispatch] = useReducer(Reduce, init);
  const {checkFollow} = state;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '100%',
        paddingBottom: 20,
        backgroundColor: '#000',
      }}>
      <View style={stylelike.textcenter}>
        <Text style={{color: '#0ef08c', fontSize: 20}}>Khám Phá</Text>
      </View>
      <ScrollView>
        {dataauthor ? (
          dataauthor.map(data => (
            <View key={data.id} style={stylelike.view}>
              <Image
                style={{width: 40, height: 40, borderRadius: 40, margin: 10}}
                source={require('../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg')}
              />
              <Text style={stylelike.textname}>{data.name}</Text>
              <View style={{top: -10, left: 280}}>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(Checkfollow(!checkFollow));
                    // Alert.alert(data.name);
                  }}
                  activeOpacity={0.8}
                  style={stylelike.handlelike}>
                  {/* {data.follow ? (
                    <SimpleLineIcons
                      name="user-following"
                      size={20}
                      color="green"
                    />
                  ) : (
                    <SimpleLineIcons
                      name="user-follow"
                      size={20}
                      color="black"
                    />
                  )} */}
                </TouchableOpacity>
              </View>
              <Text style={stylelike.textstatus}>Đã đăng 5 giờ trước</Text>
              <Text style={stylelike.textstatus_Block}>{data.titile}</Text>
              <Image
                style={{
                  height: 220,
                  marginTop: 10,
                  marginLeft: 10,
                  marginRight: 10,
                }}
                source={{uri: data.Img}}
              />
            </View>
          ))
        ) : (
          <></>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
export default LikeStackScreen;
