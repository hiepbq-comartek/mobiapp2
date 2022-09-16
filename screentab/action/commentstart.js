import * as React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView,
  TextInput,
  Animated,
} from 'react-native';
import {useRef, useEffect} from 'react';
import {style} from '../../style/stylehome';
import Post from '../Homescreeen/Post';
function Startblock({setpost, post}) {
  let animationtop = useRef(new Animated.Value(160)).current;
  useEffect(() => {
    setTimeout(() => {
      Animated.timing(animationtop, {
        toValue: 0,
        useNativeDriver: false,
        duration: 1000,
      }).start();
    }, 0);
  }, []);
  return (
    <>
      <Animated.View
        style={{
          flexDirection: 'row',
          left: 28,
          paddingBottom: 4,
          marginLeft: 8,
          marginRight: 8,
        }}>
        <View
          style={{
            backgroundColor: '#161a1f',
            borderRadius: 16,
            width: 320,
            height: 160,
          }}>
          <View style={style.projectuse}>
            <Image
              style={{width: 60, height: 60, borderRadius: 40}}
              source={require('../../accset/img/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpeg')}
            />
            <View style={{top: -49, left: 80}}>
              <Text style={{color: '#0ef08c'}}>Xin Chào Quang Hiệp</Text>
              <Text style={{top: 12, color: '#0ef08c'}}>
                Hôm nay có 2 bài viết mới
              </Text>
            </View>
          </View>
          <View style={{top: -36}}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={style.addporst}
              onPress={() => setpost(!post)}>
              <Text style={{color: '#0ef08c'}}>Bạn đang nghĩ gì ?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
      {post && <Post setpost={setpost} />}
    </>
  );
}
export default Startblock;
